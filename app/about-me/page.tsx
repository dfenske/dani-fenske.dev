export default function AboutMe() {
  return (
    <>
      <div className="flex items-start flex-col lg:flex-row">
        <div className="flex-1">
          <h1>About Me</h1>
          <h2>Observations from peers and friends</h2>
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded">
            <ul className="list-disc ml-4">
              <li>“Expert-level organization”</li>

              <li>“Extreme note taker”</li>

              <li>“Master of all tools big and small”</li>

              <li>“Solar-powered”</li>
            </ul>
          </div>
          <h2>Fun facts</h2>
          <ul className="list-disc ml-4">
            <li>
              I was born and raised in Seattle. My sister and I are
              third-generation software engineers! &#x1F604;
            </li>
            <li>
              I listen to an inordinate amount of podcasts. The topics range
              widely, from personal finance (
              <a
                href="https://www.biggerpockets.com/podcasts/money"
                target="_blank"
              >
                Bigger Pockets Money
              </a>
              ), to gardening, (
              <a
                href="https://open.spotify.com/show/5nOQHxh2cGs4k8bDYnQ1fr"
                target="_blank"
              >
                The Beet
              </a>
              ), to good, old fashioned gossip (
              <a
                target="_blank"
                href="https://open.spotify.com/show/0KVZ16mLZ1bbNlnKemYTzm"
              >
                Normal Gossip
              </a>
              ).
            </li>
            <li>
              I have a terrible sense of direction, and I am constantly getting
              a little bit lost. I like to think of the times I get turned
              around as &quot;life side-quests&quot;.
            </li>
          </ul>
          <h2>Where you might find me </h2>
          <ul className="list-disc ml-4 flex-1">
            <li>
              Poking around my veggie garden. I have about 400ft&sup2; of raised
              beds. This year&apos;s garden-success award goes to my 2 pound
              tomato.
            </li>
            <li>Plucking the banjo, my pandemic hobby of choice.</li>
            <li>
              Playing with my dog, Moss. She&apos;s two years old and an A+
              cuddler.
            </li>
          </ul>
        </div>
        <div className="flex-[2] mt-4 lg:mt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kid.jpg"
            alt="Me as a kid on my big desktop computer"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full lg:ml-6 mt-4 h-auto rounded-lg"
            fetchPriority="high"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/garden.jpg"
            alt="My garden"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full lg:ml-6 mt-4 h-auto rounded-lg"
            fetchPriority="high"
          />
        </div>
      </div>
    </>
  );
}
