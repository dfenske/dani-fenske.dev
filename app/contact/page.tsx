import { FiGithub, FiLinkedin, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <h2>
        <a
          aria-label="email"
          target="_blank"
          href="mailto:dani.fenske@gmail.com"
        >
          <FiSend className="mx-2 inline" /> dani.fenske@gmail.com
        </a>
      </h2>
      <h2>
        <a aria-label="phone number" target="_blank" href="tel:+14256477639">
          <FiPhone className="mx-2 inline" /> 425.647.7639
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
