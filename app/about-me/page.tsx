export default function AboutMe() {
  return (
    <div className="page">
      <div className="flex items-start flex-col-reverse sm:flex-row items-center">
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
              I like to change my hair color often, as seen by the difference
              between my{" "}
              <a
                aria-label="LinkedIn page"
                href="https://www.linkedin.com/in/daniellefenske/"
              >
                LinkedIn photo
              </a>{" "}
              and my{" "}
              <a aria-label="Github page" href="https://github.com/dfenske">
                Github photo
              </a>
              .
            </li>
            <li>I was born and raised in Seattle.</li>
            <li>
              I am a third-generation software engineer. My sister is a dev as
              well! &#x1F604;
            </li>
          </ul>
          <h2>Where you might find me </h2>
          <ul className="list-disc ml-4 flex-1">
            <li>
              Poking around my veggie garden. I have about 400ft&sup2; of raised
              beds. This year&apos;s garden-success award goes to my 1 pound
              tomato.
            </li>
            <li>Plucking the banjo, my pandemic hobby of choice.</li>
            <li>
              Playing with my dog, Moss. She&apos;s two years old and an A+
              cuddler.
            </li>
          </ul>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/garden.jpg"
          alt="My garden"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full sm:w-0 sm:ml-6 h-auto flex-[2] rounded-lg"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
