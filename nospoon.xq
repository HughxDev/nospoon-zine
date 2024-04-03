xquery version "1.0";

module namespace nospoon = "http://vocab.nospoon.tv/#";

(: Namespaces :)
declare namespace ovml = "http://vocab.nospoon.tv/ovml#";
declare namespace navml = "http://vocab.nospoon.tv/navml#";
declare namespace a = "http://www.w3.org/2005/Atom";
declare namespace h = "http://www.w3.org/1999/xhtml";
declare namespace request = "http://exist-db.org/xquery/request";
declare namespace xs = "http://www.w3.org/2001/XMLSchema";
declare namespace util = "http://exist-db.org/xquery/util";
declare namespace math = "java:java.lang.Math";

(: Modules :)
import module namespace functx = "http://www.functx.com" at "/db/modules/functx.xq";
import module namespace json = "http://www.json.org";

declare function local:copy-with-random($element as element()) as element() {
	let $loremipsum := doc("/db/modules/wikibooks/loremipsum.xml")/loremipsum
	let $words := tokenize($loremipsum,"\s+")
	let $marker:= "ipsum"
  return element {node-name($element)}
      {$element/@*,
          for $child in $element/node()
          return
               if ($child instance of element())
               then
                  if (name($child) =  $marker)
                  then subsequence($words,util:random(100),util:random(100))
                  else local:copy-with-random($child)
              else $child
      }
};

(: Functions :)
declare function local:format($result as node(), $output as xs:string)
{
	if ($output = 'json')
	then
		(
			util:declare-option("exist:serialize", "method=json media-type=text/javascript"),
			$result
		)
	else
		if ($output = 'html')
		then
			<ul>
			{
				for $node in $result/*
				return <li>{string($node)}</li>
			}
			</ul>
		else
			$result
};

declare function local:videoThumbnails($ovml as node())
{
	let $lis :=
		for $video in $ovml/ovml:video
		let $published := string($video/ovml:published)
		let $titleEl := $video/ovml:title
		let $title := string($titleEl)
		let $lang := $titleEl/@xml:lang
		
		let $cite := <cite>{$title}</cite>
		let $expanded := string(local:copy-with-random($cite))
		let $shortTitle := 
				if (string-length($expanded) >= 30)
				then <cite xml:lang="{$lang}" title="{$expanded}">{(substring($expanded, 1, 29), <ins>…</ins>)}</cite>
				else <cite xml:lang="{$lang}">{$expanded}</cite>
		let $videoId := <hgroup><h5>{$shortTitle} (<time datetime="{$published}">{substring-before($published, '-')}</time>)</h5></hgroup>
		return (: wanted to do `year-from-date(xs:date($published))` but exist is too dumb :)
			<li>
				<article>
					<header>
						<a href="#">
							<img class="cover-art avatar" src="http://cf2.imgobject.com/t/p/w92/iDkJrBOcKDdHhT30jSc0hH9qVzY.jpg" width="92" height="138" />
							{$videoId}
						</a>
						<div class="img ranking" title="Not yet reviewed" data-src="/img/">★★★★★</div>
					</header>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nisl vitae nunc dictum dapibus.</p>
					<ul class="buy">
						<li><a class="amazon" href="#">Buy or Rent on Amazon</a></li>
					</ul>
				</article>
			</li>
		let $count := count($lis)
		return
			<ul class="video-thumbnails total-{$count} macro">
			{$lis}
			</ul>
};

(: Same as functx but does not eliminate duplicates :)
declare function nospoon:value-except 
  ( $arg1 as xs:anyAtomicType* ,
    $arg2 as xs:anyAtomicType* )  as xs:anyAtomicType* {
       
  $arg1[not(.=$arg2)]
};

declare function nospoon:str2id($string as xs:string) as xs:string {
	let $grammaticalArticles := ('a', 'an', 'and', 'at', 'but', 'by', 'else', 'for', 'from', 'if', 'in', 'into', 'is', 'nor', 'of', 'off', 'on', 'or', 'out', 'over', 'the', 'then', 'to', 'when', 'with')
(:
	let $sanitized := lower-case(replace($string, '^A-Za-z0-9_-\s', ''))
	let $collapsedSpaces := replace($sanitized, '\s+', ' ')
	let $trimmed := functx:trim($collapsedSpaces)
	let $tokens := tokenize($trimmed, '\s')
	let $decimated := nospoon:value-except($tokens, $grammaticalArticles)
	return string-join($decimated, '-')
:)
	let $tokens := tokenize(functx:trim(replace(lower-case(replace($string, '^A-Za-z0-9_-\s', '')), '\s+', ' ')), '\s')
	return string-join(nospoon:value-except($tokens, $grammaticalArticles), '-')
};

(: technically this does not follow the xml:id definition in which some characters can not appear in the first character position, but any non-conforming documents will raise an error anyway :)

declare function nospoon:expand-vars($label as xs:string, $defs as node()) {
	let $pattern := '\{#[a-zA-Z0-9_\-.]+\}'
	return
		if (matches($label, $pattern))
		then
			let $hack := <root>{functx:get-matches-and-non-matches($label, $pattern)}</root>
			for $match in $hack/*[local-name(.) = 'match']
				let $var := string($match)
				let $id := substring-before(substring-after($var, '#'), '}')
				let $selected := 
					if ($defs//navml:var[@xml:id = $id]/navml:opt[@selected])
					then $defs//navml:var[@xml:id = $id]/navml:opt[@selected][1]
					else $defs//navml:var[@xml:id = $id]/navml:opt[1]
				let $dfn := string($selected)
				let $replaced := replace($label, functx:escape-for-regex($var), $dfn)
				return
					if (matches($replaced, $pattern))
					then nospoon:expand-vars($replaced, $defs)
					else $replaced
		else $label
};

(: separate out into recursive build-list :)

declare function local:build-nav-list($item as node(), $defs as node(), $prevPath as xs:string?) {
		if ($item[@use])
		then local:build-nav-list($defs//navml:item[@xml:id = substring-after($item/@use, '#')], $defs, $prevPath)
		else
			let $childLabel := $item/navml:label[1]
			return
				if ($childLabel)
				then
					let $label := string($childLabel)
					let $id :=
						(: if ($item[@xml:id]) then string($item/@xml:id) else :)
						nospoon:str2id($label)
					let $path :=
						if ($prevPath)
						then
							if ($prevPath = '/')
							then concat($prevPath, $id)
							else concat($prevPath, '/', $id)
						else $id
					let $description := $item/navml:description
					let $hasSubmenu := $item/navml:item
					let $hasShowHide := $item[@showhide = 'true'] or $defs/navml:setting[@name = 'showhide'][@value = 'true']
					return
						<li class="{$id}">
						{
							element a {
								if ($hasShowHide and $hasSubmenu)
								then
									(
										attribute title { 'Go to subcategories' },
										attribute href { concat('#', $id) }
									)
								else (: showhide :)
									(
										if ($description)
										then attribute title { string($item/navml:description) }
										else (),
										if ($path = '/reviews')
										then attribute class { 'here' }
										else (),
										attribute href { concat($path, '/') }
									)
								,
								(: attribute onclick { 'return false;' }, :)
								if ($childLabel[@expand])
								then nospoon:expand-vars($label, $defs)
								else $label
							},
							if ($item/navml:item)
								then
									let $lis :=
										for $subitem in $item/navml:item
										return local:build-nav-list($subitem, $defs, $path)
									let $count := count($lis)
										return
										<ul id="{$id}" class="total-{$count}">
										{$lis}
										</ul>
								else ()
						}
						</li>
				else (: no label :)
					if ($item/navml:item)
					then
						for $subitem in $item/navml:item
						return local:build-nav-list($subitem, $defs, $prevPath)
					else () (: no label, no item children :)
};

declare function nospoon:build-nav() {
	let $root := doc('/db/site/includes/content/nav.xml')/navml:navml
	let $defs := $root/navml:defs
	return
		<nav id="nav" role="navigation">
		<hgroup class="implied">
			<h2>Sitewide Navigation</h2>
		</hgroup>
		<ul>
		{
			(
				for $item in $root/navml:nav/navml:item
				return local:build-nav-list($item, $defs, '/')
				, <li id="back"><a href="#top">Back to top</a></li>
			)
		}
		</ul>
		</nav>
};

declare function nospoon:get-cover-art() {
	<null />
};

(: Options :)
(:declare option exist:serialize 'method=json media-type=text/javascript';:)

(: Main :)
declare function nospoon:get-author-avatar($username as xs:string, $size as xs:integer) {
	let $hash := util:hash(concat($username, '@nospoon.tv'), 'md5')
	let $name := 'Roger Ebert'
	return
		<img class="photo avatar" alt="Photo of {$name}" width="{$size}" height="{$size}" src="http://www.gravatar.com/avatar/{$hash}.png?s={$size}" />
};

declare function nospoon:getVideoMentions($id as xs:string, $user as xs:string, $output as xs:string)
{
let $vocabRoot := 'http://vocab.nospoon.tv/'

let $type := 'video'
let $Type := functx:capitalize-first($type)

let $rootEl :=
	if ($type = 'video')
	then 'ovml'
	else concat('o', substring($type, 1, 1), 'ml')

let $rootNS := concat($vocabRoot, $rootEl, '#')
let $rootQname := QName($rootNS, $rootEl)
let $workQname := QName($rootNS, $type)
let $titleQname := QName($rootNS, 'title')

let $userEntries := concat('http://atom.nospoon.tv/users/', $user, '/entries')
let $idQS := '?id='
let $doc := 
		if ($id)
		then concat($userEntries, $idQS, $id)
		else $userEntries

let $collection := doc($doc)//a:entry

let $refs :=
	for $work in $collection/a:content/h:div[@vocab = $rootNS]/h:p//*[self::h:cite or self::h:span][@typeof = $Type]
	let $title := $work//h:cite
	let $ovmlRef := $collection/*[node-name(.) = $rootQname]/*[node-name(.) = $workQname][@xml:id = substring($work/@about, 2)]
	let $lang :=
		if ($title/@xml:lang)
		then $title/@xml:lang
		else
			if ($ovmlRef/*[node-name(.) = $titleQname]/@xml:lang)
			then $ovmlRef/*[node-name(.) = $titleQname]/@xml:lang
			else
				if ($title/@lang)
				then $title/@lang
				else ()
	let $pubDate := 
		if ($work//h:time[@property="published"]) (: fix :)
		then
			if ($work//h:time[@property="published"]/@datetime)
			then string($work//h:time[@property="published"]/@datetime)
			else string($work//h:time[@property="published"])
		else
			if ($ovmlRef/*[node-name(.) = QName($rootNS, 'published')])
			then string($ovmlRef/*[node-name(.) = QName($rootNS, 'published')])
			else ()
	return
		element { $workQname }{
			element title{
				$lang,
				$title/text()
			},
			if ($pubDate)
			then
				element published {$pubDate}
			else ()
		}
(: end $refs :)

let $result :=
	element { $rootQname }
	{
		(:<doc>{$doc}</doc>,:)
		for $work in functx:distinct-deep($refs)
		order by $work/*[node-name(.) = QName($rootNS, 'published')] descending
		return $work
	}

return
	if ($output = 'html')
	then local:videoThumbnails($result)
	else local:format($result, $output)
};

declare function nospoon:id-paras($node as node()) {
	let $return := 
		element { node-name($node) }
		{
			(
				for $attr in $node/@*
				return attribute { node-name($attr) } { $attr }
			),
			(
				for $element at $pos in $node/h:p
				return
					(: if (local-name($element) = 'p')
					then :)
						functx:add-attributes(
							$element
							, xs:QName('id')
							, $pos (: concat('p', $pos) :)
						)
					(: else $element :)
			)
		}
	return $return
};