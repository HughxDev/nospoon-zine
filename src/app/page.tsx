import { createHash } from "crypto";

export default function Home() {
  const $topicTitle = 'Drive';
  const $topicPublished = '2011';
  const $topicRuntime = <time dateTime="PT100M">100 minutes</time>;
  const $topicStarring = <>
    <dd>Ryan Gosling</dd>
    <dd>Carey Mulligan</dd>
    <dd>Bryan Cranston</dd>
    <dd>Albert Brooks</dd>
    <dd>Ron Perlman</dd>
    <dd>Oscar Isaac</dd>
  </>;
  const $topicDirector = 'Nicolas Winding Refn';
  const $topicContentRating = 'R';
  const $topicContentRater = <a title="“Film Ratings - Motion Picture Association” on motionpictures.org" href="https://www.motionpictures.org/film-ratings/"><abbr>MPA</abbr></a>;
  const $topicContentRatingReason = 'strong brutal bloody violence, language and some nudity';
  const $infoLinks = <ul>
    <li className="imdb"><a href="http://www.imdb.com/title/tt0780504/">IMDb</a></li>
    <li className="tmdb"><a href="http://www.themoviedb.org/movie/64690-drive">TMDB</a></li>
    <li className="wikipedia"><a href="http://en.wikipedia.org/wiki/Drive_(2011_film)">Wikipedia</a></li>
    <li className="amazon"><a href="http://www.amazon.com/Drive-UltraViolet-Digital-Copy-Blu-ray/dp/B0064NTZJO%3FSubscriptionId%3DAKIAIH55RAJODGWTXQLQ%26tag%3Dnospotv-20%26linkCode%3Dsp1%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB0064NTZJO">Buy on Amazon</a></li>
  </ul>;

  // const $entryAuthor = 'Hugh Guiney';
  // const $entryAuthorRole = 'Editor-in-chief, Founder';
  // const $entryAuthorId = 'hugh';
  // const $entryAuthorEmail = `${$entryAuthorId}@nospoon.productions`;
  // const $entryAuthorAbout = 'Hugh Guiney has been creating movies since he was 10 years old. Beginning in the late 1990s, he would direct improvised storylines with his brothers and friends and act them out in front of the camera.';

  const $entryAuthor = 'Roger Ebert';
  const $entryAuthorRole = 'Contributor';
  const $entryAuthorId = 'roger.ebert';
  const $entryAuthorEmail = `${$entryAuthorId}@nospoon.tv`;
  const $entryAuthorAbout = 'Roger Ebert was an American movie critic. Ebert’s reviews appear in newspapers such as the Chicago Sun-Times from April 3, 1967 until his death.';

  const gravatarHash = createHash('sha256').update($entryAuthorEmail).digest('hex');
  const gravatarSize = 100;
  const $entryAuthorAvatar = `https://gravatar.com/avatar/${gravatarHash}?s=${gravatarSize * 3}`;

  const videoMentions = [
    {
      expandedTitle: 'Le Samourai',
      lang: 'fr',
      published: '1967-01-01',
    },
    {
      expandedTitle: 'Bronson',
      lang: 'en',
      published: '2008-01-01',
    },
  ];

  return (
    <>
      <header id="top" role="banner">
        <div className="content">

          {/*
          <div id="switch">
          <a href="//watch.nospoon.tv">
          {doc('img/menu-icon.svg')}
          </a>
          </div>
          */}

          <div id="branding">

            <a href="/" title="Home">

              <div id="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="271.332"
                  height="63.478"
                  viewBox="0 0 271 63"
                >
                  <defs>
                    <path
                      d="M108.7 24.46c6.9 18.39 2.2 38.37-7.6 54.73-3.15 5.18-7.01 9.35-8.42 15.31-1.12 4.7-1.4 9.6-1.48 14.4-.46 27.7 4.96 55.3 7.06 82.8.88 11.6 1.74 23.7-.38 35.1-1.2 6.5-4.13 14.5-11.89 14.7-7.83.1-11.09-9.3-12.17-16.3-2.04-13.2-.73-27 .46-40.2 2.43-26.8 8.06-54.2 6.3-81.2-.28-4.32-.79-8.76-2.34-12.82-.93-2.44-2.43-4.35-3.91-6.49-3.39-4.9-6.38-10.09-8.75-15.56-7.02-16.15-8.04-34.9.51-50.69 3.57-6.61 12-18.45 21-17.14 10.5 1.54 18.31 14.5 21.61 23.36z"
                      id="a"
                      style={ {
                        stroke: '#f5f5f5',
                        fill: 'none',
                        strokeWidth: 4,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 4,
                        strokeDasharray: '4,8,4,9',
                        strokeDashoffset: 0,
                      } }/>
                    </defs>
                    <use
                      transform="matrix(0 1.135 -1.11 0 270.386 -65.995)"
                      style={ { stroke: '#000' } }
                      width="174"
                      height="244"
                      xlinkHref="#a"
                    />
                  </svg>
              </div>

              <h1 className="wordmark">No Spoon</h1>
              <p id="tagline"><q>Free your mind.</q></p>

            </a>

          </div>{/* #branding */}

          <div id="menu">
            <a href="#nav">Jump to navigation</a>
          </div>{/* #menu */}

        </div>{/* .content */}
      </header>

      <div id="content" className="content">

        <aside role="complementary">
        </aside>{/* complementary */}

        <article id="main" className="review" role="main">
          {/*<!--div className="content"-->*/}
          <header>
            <hgroup>
              <h2><span className="article-type">Review:</span> <cite>{$topicTitle}</cite> <span className="phrase">(<time className="released">{$topicPublished}</time>)</span></h2>
              <h2><span className="phrase"><span className="preposition">by</span> {$entryAuthor}</span> <span className="phrase"><span className="preposition">on</span> <time className="pubdate" dateTime="2011-11-07">Oct 7th, 2011</time></span></h2>
            </hgroup>

            <img alt="img" src="/img/f6nLe5SgUEWIMbulgoBRaDPR0TL.jpg" />

            {/*<!--figure>
<figcaption>{$topicDistributor} presents a film directed by {string($topicDirector[2])}. Written by {$topicWriter}, based on the {$topicDerivedFromType} by {$topicDerivedFromWriter}.</figcaption>
</figure-->*/}

          </header>

          {/*$entryContent*/}

          <div id="article" className="entry-content">{/*contentEditable="true"*/}
            <p>The Driver drives for hire. He has no other name, and no other life. When we first see him, he’s the wheelman for a getaway car, who runs from police pursuit not only by using sheer speed and muscle, but by coolly exploiting the street terrain and outsmarting his pursuers. By day, he is a stunt driver for action movies. The two jobs represent no conflict for him: He drives.</p>
            <p>As played by Ryan Gosling, he is in the tradition of two iconic heroes of the 1960s: Clint Eastwood’s Man With No Name and Alain Delon in <cite>Le Samourai</cite>. He has no family, no history and seemingly few emotions. Whatever happened to him drove any personality deep beneath the surface. He is an existential hero, I suppose, defined entirely by his behavior.</p>
            <p>That would qualify him as the hero of a mindless action picture, all CGI and crashes and mayhem. <cite>Drive</cite> is more of an elegant exercise in style, and its emotions may be hidden but they run deep. Sometimes a movie will make a greater impact by not trying too hard. The enigma of the driver is surrounded by a rich gallery of supporting actors who are clear about their hopes and fears, and who have either reached an accommodation with the Driver, or not. Here is still another illustration of the old Hollywood noir principle that a movie lives its life not through its hero, but within its shadows.</p>
            <p>The Driver lives somewhere (somehow that’s improbable, since we expect him to descend full-blown into the story). His neighbor is Irene, played by Carey Mulligan, that template of vulnerability. She has a young son, Benecio (Kaden Leos), who seems to stir the Driver’s affection, although he isn’t the effusive type. They grow warm, but in a week, her husband, Standard (Oscar Isaac), is released from prison. Against our expectations, Standard isn’t jealous or hostile about the new neighbor, but sizes him up, sees a professional and quickly pitches a $1 million heist idea. That will provide the engine for the rest of the story, and as Irene and Benecio are endangered, the Driver reveals deep feelings and loyalties indeed, and undergoes enormous risk at little necessary benefit to himself.</p>
            <p>The film by the Danish director Nicolas Winding Refn (<cite>Bronson</cite>), based on a novel by James Sallis, peoples its story with characters who bring lifetimes onto the screen, in contrast to the Driver, who brings as little as possible. Ron Perlman seems to be a big-time operator working out of a small-time front, a pizzeria in a  strip mall. Albert Brooks, not the slightest bit funny, plays a producer of the kinds of B movies the Driver does stunt driving for &#8212; and also has a sideline in crime. These people are ruthless. </p>
            <p>More benign is Bryan Cranston, as the kind of man you know the Driver must have behind him, a genius at auto repairs, restoration and supercharging.</p>
            <p>I mentioned CGI earlier. <cite>Drive</cite> seems to have little of it. Most of the stunt driving looks real to me, with cars of weight and heft, rather than animated impossible fantasies. The entire film, in fact, seems much more real than the usual action-crime-chase concoctions we’ve grown tired of. Here is a movie with respect for writing, acting and craft. It has respect for knowledgable moviegoers. There were moments when I was reminded of <cite>Bullitt</cite>, which was so much better than the films it inspired. The key thing you want to feel, during a chase scene, is involvement in the purpose of the chase. You have to care. Too often we’re simply witnessing technology.</p>
            <p>Maybe there was another reason I thought of <cite>Bullitt</cite>. Ryan Gosling is a charismatic actor, as Steve McQueen was. He embodies presence and sincerity. Ever since his chilling young Jewish neo-Nazi in <cite>The Believer</cite> (2001), he has shown a gift for finding arresting, powerful characters. An actor who can fall in love with a love doll and make us believe it, as he did in <cite>Lars and the Real Girl</cite> (2007), can achieve just about anything. <cite>Drive</cite> looks like one kind of movie in the ads, and it is that kind of movie. It is also a rebuke to most of the movies it looks like.</p>
            {/* <p>Tatsoi radicchio cassava water spinach water spinach. Scorzonera celtuce lentil; beet greens cauliflower radicchio radicchio bitter melon velvet bean miner’s lettuce. Green bean skirret, horseradish guar pigeon pea common bean pigeon pea parsnip ginger jícama mizuna greens lagos bologi. Chrysanthemum leaves ahipa scorzonera hamburg parsley cardoon chinese mallow tigernut winter melon.</p>
            <p>Horse gram prussian asparagus, broccoli rabe tatsoi. Sea beet bok choy swede. Bitterleaf turnip celtuce chinese cabbage, sweet pepper golden samphire brussels sprout tinda. Watercress tinda velvet bean hamburg parsley turnip greens camas turnip - leaves, kohlrabi soybean mung bean!</p>
            <p>Lizard’s tail samphire tomatillo, onion chrysanthemum leaves skirret beet greens endive - winged bean green bean, earthnut pea? Watercress, burdock, canna, guar polk spinach chickweed tepary bean yardlong bean. Carrot florence fennel mustard miner’s lettuce catsear polk chicory; horseradish velvet bean dolichos bean leaves winged bean. Corn salad, yacón broadleaf arrowhead.</p>
            <p>Yardlong bean radish fat hen fiddlehead ceylon spinach sierra leone bologi sweet corn aka corn; aka maize. Tepary bean cress skirret nopal plectranthus sweet pepper yardlong bean bok choy, pignut.</p>
            <p>Kai-lan rutabaga water spinach burdock ricebean winter melon lentil, mung bean. Gobo mizuna greens tomato komatsuna beet greens. Bamboo shoot beetroot rutabaga onion. Garden Rocket sweet pepper potato, soybean, lettuce, lettuce, azuki bean, kuka chinese artichoke bok choy! Indian pea water chestnut, watercress fluted pumpkin lizard’s tail tatsoi, earthnut pea tepary bean hamburg parsley. Welsh onion peanut yam, manioc sweet pepper. Chaya mooli peanut fat hen melokhia chickpea guar tinda winter melon.</p> */}
          </div>{/* #entry-content */}

          <footer>

            <div className="content">

              <section id="overview" data-id="about" className="major">

                <div className="content">

                  <hgroup className="decorative">
                    <h2>The Lowdown</h2>
                  </hgroup>

                  {/*<img src="http://cf2.imgobject.com/t/p/original/ljJrY4ehK5xn3kJ8He5JixCDRVy.jpg" />*/}

                  <section id="the-film" className="group">

                    <hgroup>
                      <h2>The Film</h2>
                    </hgroup>

                    <dl className="at-a-glance content">

                      <div>
                        <dt className="runtime">Running Time</dt>
                        <dd>{$topicRuntime}</dd>
                      </div>

                      <div>
                        <dt className="ar">Aspect Ratio</dt>
                        <dd>2.35:1</dd>
                      </div>

                      <div>
                        <dt>Language</dt>
                        <dd>English</dd>
                      </div>

                      <div>
                        <dt>Director</dt>
                        {$topicDirector}
                      </div>

                      <div>
                        <dt className="starring one-to-many">Starring</dt>
                        {$topicStarring}
                      </div>

                      <div>
                        <dt className="content-rating">Content Rating</dt>
                        <dd>“{$topicContentRating}” ({$topicContentRater}) for {$topicContentRatingReason}</dd>
                      </div>

                      <div>
                        <dt className="more">More</dt>
                        <dd>{$infoLinks}</dd>
                      </div>

                    </dl>

                  </section>{/* #the-film */}

                  <section id="author">
                    <hgroup>
                      <h2>The Reviewer</h2>
                    </hgroup>

                    <div id="author-id">

                      <address>

                        <dl>
                          <dt>
                            <a title="More from this author" href={`/authors/${$entryAuthorId}/`}>
                              {/*nospoon:get-author-avatar($entryAuthorId, 100)*/}
                              <img className="photo avatar" src={$entryAuthorAvatar} width={gravatarSize} height={gravatarSize} alt={`Photo of ${$entryAuthor}`} />
                              {$entryAuthor}
                            </a>
                          </dt>
                          <dd>

                            <dl>
                              <dt className="implied">Role</dt>
                              <dd>{$entryAuthorRole}</dd>

                              <dt className="implied">E-mail</dt>
                              <dd><a href={`mailto:${$entryAuthorEmail}`}><code className="casual">{$entryAuthorEmail}</code></a></dd>
                            </dl>

                          </dd>
                        </dl>

                      </address>

                    </div>{/* #author-id */}

                    <p>{$entryAuthorAbout}</p>

                  </section>{/* #author */}

                  <section id="publication-details">

                    <div className="content">

                      <hgroup>
                        <h2>The Article</h2>
                      </hgroup>

                      <p>
                        <a rel="license" title="Full license terms on Creative Commons" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                          <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="64px"
                            height="64px"
                            viewBox="5.5 -3.5 64 64"
                            enable-background="new 5.5 -3.5 64 64"
                            xmlSpace="preserve"
                          >
                          <g>
                            <circle fill="transparent" cx="37.785" cy="28.501" r="28.836" />
                            <path
                              fill="rgb(40,40,40)"
                              d="M37.441-3.5c8.951,0,16.572,3.125,22.857,9.372c3.008,3.009,5.295,6.448,6.857,10.314
                              c1.561,3.867,2.344,7.971,2.344,12.314c0,4.381-0.773,8.486-2.314,12.313c-1.543,3.828-3.82,7.21-6.828,10.143
                              c-3.123,3.085-6.666,5.448-10.629,7.086c-3.961,1.638-8.057,2.457-12.285,2.457s-8.276-0.808-12.143-2.429
                              c-3.866-1.618-7.333-3.961-10.4-7.027c-3.067-3.066-5.4-6.524-7-10.372S5.5,32.767,5.5,28.5c0-4.229,0.809-8.295,2.428-12.2
                              c1.619-3.905,3.972-7.4,7.057-10.486C21.08-0.394,28.565-3.5,37.441-3.5z M37.557,2.272c-7.314,0-13.467,2.553-18.458,7.657
                              c-2.515,2.553-4.448,5.419-5.8,8.6c-1.354,3.181-2.029,6.505-2.029,9.972c0,3.429,0.675,6.734,2.029,9.913
                              c1.353,3.183,3.285,6.021,5.8,8.516c2.514,2.496,5.351,4.399,8.515,5.715c3.161,1.314,6.476,1.971,9.943,1.971
                              c3.428,0,6.75-0.665,9.973-1.999c3.219-1.335,6.121-3.257,8.713-5.771c4.99-4.876,7.484-10.99,7.484-18.344
                              c0-3.543-0.648-6.895-1.943-10.057c-1.293-3.162-3.18-5.98-5.654-8.458C50.984,4.844,44.795,2.272,37.557,2.272z M37.156,23.187
                              l-4.287,2.229c-0.458-0.951-1.019-1.619-1.685-2c-0.667-0.38-1.286-0.571-1.858-0.571c-2.856,0-4.286,1.885-4.286,5.657
                              c0,1.714,0.362,3.084,1.085,4.113c0.724,1.029,1.791,1.544,3.201,1.544c1.867,0,3.181-0.915,3.944-2.743l3.942,2
                              c-0.838,1.563-2,2.791-3.486,3.686c-1.484,0.896-3.123,1.343-4.914,1.343c-2.857,0-5.163-0.875-6.915-2.629
                              c-1.752-1.752-2.628-4.19-2.628-7.313c0-3.048,0.886-5.466,2.657-7.257c1.771-1.79,4.009-2.686,6.715-2.686
                              C32.604,18.558,35.441,20.101,37.156,23.187z M55.613,23.187l-4.229,2.229c-0.457-0.951-1.02-1.619-1.686-2
                              c-0.668-0.38-1.307-0.571-1.914-0.571c-2.857,0-4.287,1.885-4.287,5.657c0,1.714,0.363,3.084,1.086,4.113
                              c0.723,1.029,1.789,1.544,3.201,1.544c1.865,0,3.18-0.915,3.941-2.743l4,2c-0.875,1.563-2.057,2.791-3.541,3.686
                              c-1.486,0.896-3.105,1.343-4.857,1.343c-2.896,0-5.209-0.875-6.941-2.629c-1.736-1.752-2.602-4.19-2.602-7.313
                              c0-3.048,0.885-5.466,2.658-7.257c1.77-1.79,4.008-2.686,6.713-2.686C51.117,18.558,53.938,20.101,55.613,23.187z"/>
                          </g>
                        </svg>
                       <dfn>Creative Commons <abbr>BY-NC-ND 4.0</abbr></dfn>
                      </a>: You may redestribute this work freely, provided it is: <a href="/terms/#attribution">properly attributed</a>, for noncommercial purposes, and without modification.</p>

                    </div>{/* .content */}

                  </section>{/* #publicatios-details */}

                </div>{/* .content */}

              </section>{/* #overview */}

              <section id="mentioned" className="major">

                <div className="content">

                  <hgroup className="decorative">
                    <h2>Shouted Out Flicks</h2>
                  </hgroup>

                  {/*<p>Organize by:
	<select>
		<option>Release Date</option>
		<option>Verdict</option>
	</select>
	<select>
		<option>Descending</option>
		<option>Ascending</option>
	</select>
</p>*/}

                  {/*nospoon:getVideoMentions($entryId, $entryAuthorId, 'html')*/}
                  <ul className={ `video-thumbnails total-${videoMentions.length} macro` }>
                    { videoMentions.map( ( { expandedTitle, lang, published } ) => {
                      const $videoId = (
                        <hgroup>
                          <h5><cite xmlLang={ lang }>{expandedTitle}</cite> (<time dateTime={published}>{published.split( '-' )[0]}</time>)</h5>
                        </hgroup>
                      );

                      return (
                        <li key={ Math.random() }>
                          <article>
                            <header>
                              <a href="#">
                                <img className="cover-art avatar" src="https://placehold.co/92x138" width="92" height="138" alt="cover art" />
                                {$videoId}
                              </a>
                              <div className="img ranking" title="Not yet reviewed" data-src="/img/">★★★★★</div>
                            </header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nisl vitae nunc dictum dapibus.</p>
                            <ul className="buy">
                              <li><a className="amazon" href="#">Buy or Rent on Amazon</a></li>
                            </ul>
                          </article>
                        </li>
                      );
                    } ) }
                  </ul>

                </div>{/* .content */}

              </section>{/* #mentioned */}

              <section id="responses" className="major">

                <div className="content">

                  <hgroup className="decorative">
                    <h2>Responses</h2>
                  </hgroup>

                  <p><a>Write the editor</a> or <a>respond on your blog</a> by September 6th, 2012, and we may feature it here.</p>

                  <ol>
                    <li>
                      <blockquote>
                        <p>I hope this letter will fascinate, inform, and change the lives of those who read it. It’s possibly the only letter out there that’s bold enough to make the uncompromising statement that Roger Ebert’s execrations are more often out of sync with democratic values than aligned with them. What follows is a call to action for those of us who care—a large enough number to denounce those who claim that Ebert’s flock consists entirely of lovable, cuddly people who would never dream of tossing sops to the egos of the peevish. The take-away message of this letter is that anyone who thinks that Roger Ebert’s scare tactics won’t be used for political retribution has never been hauled before a tribunal and accused of tribalism. We should hold these words to our bosom, use them as a shield against Ebert’s inequities, and wield them unilaterally against those who would advocate fatalistic acceptance of a discourteous, wild new world order.</p>
                      </blockquote>
                      <p>—Matt D.</p>
                    </li>
                  </ol>

                </div>{/* .content */}

              </section>{/* #responses */}

            </div>{/* .content */}

          </footer>

          {/*</div>*/}{/* .content */}
        </article>{/* main */}

      </div>{/* #content.content */}

      <footer id="bottom" role="contentinfo">

        <div className="content">

          {/*nospoon:build-nav()*/}

          <section id="cross-promotion">

            <hgroup>
              <h2>Also on No Spoon</h2>
            </hgroup>

            <ul className="total-6 macro">

              <li>
                <a className="productions" href="/productions/wicked-sketchy/trick-candles">
                  <article>
                    <img className="front" src="/img/trick-candles.jpg" />
                    <div className="back">
                      <hgroup>
                        <h2>
                          <span className="category">Production:</span>
                          <span>“Trick Candles”</span> <span className="phrase">(<cite className="casual">Wicked Sketchy</cite> <abbr title="Episode 9">E09</abbr>)</span>
                        </h2>
                      </hgroup>
                      <p>A couple play a prank on grandpa for his birthday.</p>
                    </div>{/* #back */}
                  </article>
                </a>
              </li>

              <li>
                <a className="inspirations" href="/inspirations/umbra">
                  <article>
                    <img src="http://b.vimeocdn.com/ts/884/017/88401708_1280.jpg" />
                    <hgroup>
                      <h2>
                        <span className="category">Inspiration:</span>
                        <cite>Umbra</cite> <span className="phrase">(<time>2010</time>)</span></h2>
                    </hgroup>
                    <p>An explorer adventures into an unknown world, yet it seems that he has been there before.</p>
                  </article>
                </a>
              </li>

              <li>
                <a className="musings" href="/musings/wheres-the-line-between-inspiration-imitation">
                  <article>
                    <img src="/img/musings.png" />
                    <hgroup>
                      <h2>
                        <span className="category">Musing:</span> Where’s the Line Between Inspiration and Imitation?</h2>
                    </hgroup>
                    <p>When and how is it safe to borrow from other works? Thoughts on the evolving role of copyright in today’s remix culture.</p>
                  </article>
                </a>
              </li>

              <li>
                <a className="reviews" href="/reviews/dark-knight-trilogy-2005-2012">
                  <article>
                    <img src="/img/lcvuQDedwXGtBOJkte0En7kamO.jpeg" />
                    <hgroup>
                      <h2>
                        <span className="category">Review:</span> Batman Film Retrospective <span className="phrase">(1989–2012)</span></h2>
                    </hgroup>
                    <p>A look at what the Burton/Schumacher and Nolan Batman film series each did for the franchise, how they relate to each other, and where the Dark Knight goes from here.</p>
                  </article>
                </a>
              </li>

              <li>
                <a className="shop" href="/shop/no-spoon-tee">
                  <article>
                    <img data-src="/img/shop.png" src="/img/shirt.jpg" />
                    <hgroup>
                      <h2>
                        <span className="category">Shop:</span> No Spoon Tee
                      </h2>
                    </hgroup>
                    <p>Never get made fun of at school again by rocking these hip threads!</p>
                  </article>
                </a>
              </li>

              <li>
                <a className="subscribe" href="feed:/subscribe/reviews">
                  <article>
                    <img src="/img/subscribe.png" />
                    <hgroup>
                      <h2>
                        <span className="category">Subscription:</span> All Reviews
                      </h2>
                    </hgroup>
                    <p>Stay up-to-date on all the latest reviews by adding this link to your feed reader.</p>
                  </article>
                </a>
                <p>Don’t have one? Check out <a href="http://www.feedly.com/">Feedly</a>.</p>
              </li>

            </ul>

          </section>{/* #cross-promotion */}

          <aside id="mqotd">

            <hgroup>
              <h2>Movie Quote of the Day</h2>
            </hgroup>

            <blockquote>
              <p>Marcus, I just have one question for ya bro. How the hell you gonna leave my ass at a gun fight to go get the car!</p>
            </blockquote>
            <p>—Det. Mike Lowrey, <cite>Bad Boys</cite> <span>(<time>1995</time>)</span></p>

          </aside>{/* #mqotd */}

          <a href="http://bostonbuilt.org/">{/*doc('img/boston-built.svg')*/}</a>
          {/*<p><a href=""><img src="http://exist-db.org/exist/resources/powered.gif" alt="Powered by eXist-db" /></a></p>*/}

        </div>{/* .content */}

      </footer>{/* contentinfo */}
    </>
  );
}