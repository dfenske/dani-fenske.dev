import { FiGithub } from "react-icons/fi";

export default function MakingOfTheSite() {
  return (
    <div className="page">
      <h1>A Peek into the Making of this Site &#128269;</h1>
      <h3 className="text-center">
        <a target="_blank" href="https://github.com/dfenske/dani-fenske.dev">
          <FiGithub className="inline" /> Source code
        </a>
      </h3>
      <h2>Purpose</h2>
      <p>
        I listen to{" "}
        <a href="https://syntax.fm/" target="_blank">
          SyntaxFM
        </a>
        , a great podcast about frontend development. A{" "}
        <a
          href="https://syntax.fm/show/326/we-review-resumes-websites-and-online-presence"
          target="_blank"
        >
          specific episode
        </a>{" "}
        about resumes and online presence caught my attention. Instead of just
        having a simple resume, I decided I wanted to showcase my skills, and
        tell people a bit more about me than can fit on one sheet of paper.
      </p>
      <h2>Process</h2>
      <p>
        I tried to timebox the creation of the first-draft of this website. I
        created a backlog for myself in{" "}
        <a href="https://www.notion.so/" target="_blank">
          Notion
        </a>{" "}
        to track and prioritize my goals. My aim was a simple design that still
        looks polished.
      </p>
      <h2>Tools Used</h2>
      <p className="mb-2">
        I chose{" "}
        <a href="https://nextjs.org/docs" target="_blank">
          NextJS
        </a>{" "}
        for its ease of use and many built-in features. I chose{" "}
        <a href="https://www.netlify.com" target="_blank">
          Netlify
        </a>{" "}
        because it offers integration with Github so that your site deploys
        every time you push code.{" "}
        <a href="https://tailwindcss.com/" target="_blank">
          TailwindCSS
        </a>{" "}
        came built-in in NextJS and I wanted an excuse to play around with it.{" "}
        <span className="italic">
          (My takeaway: Tailwind is a nice way to get up and running, but I
          don&apos;t love long class lists and instead am still partial to
          SASS.)
        </span>
      </p>
      <p>
        <span className="callout">
          Optimization, speed, responsive design, and accessibility
        </span>{" "}
        are all important as well. To achieve these goals, I used Google&apos;s{" "}
        <a
          href="https://developer.chrome.com/docs/lighthouse/overview/"
          target="_blank"
        >
          Lighthouse
        </a>{" "}
        to analyze performance,{" "}
        <a href="https://www.deque.com/axe-devtools-accessibility-testing/">
          axe DevTools
        </a>{" "}
        by Deque to pinpoint accessibility issues, and{" "}
        <a
          href="https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer"
          target="_blank"
        >
          @next/bundle-analyzer
        </a>{" "}
        to analyze my bundle size.
      </p>
      <h2>Wish list</h2>
      <p>
        As every frontend dev can attest, there is always a long list of{" "}
        <code>TODOs</code> that grows and grows. I decided to list my ideas here
        and check them off as I get time to implement them.
      </p>
      <ul className="list-disc ml-4">
        <li>A contact form</li>
        <li>Play with page transitions/animations</li>
        <li>Implement a more cohesive color theme</li>
      </ul>
    </div>
  );
}
