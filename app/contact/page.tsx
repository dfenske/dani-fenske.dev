import { FiGithub, FiLinkedin, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  // Very simple email obfuscation
  const user = "dani.fenske";
  const site = "gmail";

  return (
    <>
      <h1>Contact</h1>
      <h2>
        <a
          aria-label="email"
          target="_blank"
          href={`mailto:&#100;&#097;&#110;&#105;&#046;&#102;&#101;&#110;&#115;&#107;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;`}
        >
          <FiSend className="mx-2 inline" /> dani.fenske[at]gmail.com
        </a>
      </h2>
      <h2>
        <a
          aria-label="github"
          target="_blank"
          href="https://www.linkedin.com/in/daniellefenske/"
        >
          <FiGithub className="mx-2 inline" />
          LinkedIn
        </a>
      </h2>
      <h2>
        <a
          aria-label="linkedin"
          target="_blank"
          href="https://github.com/dfenske"
        >
          <FiLinkedin className="mx-2 inline" />
          Github
        </a>
      </h2>
    </>
  );
}
