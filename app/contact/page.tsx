import { FiGithub, FiLinkedin, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  // Overly simple email obfuscation
  // TODO: Add email form instead of just a mailto link
  const user = "dani.fenske";
  const site = "gmail";

  return (
    <>
      <h1>Contact</h1>
      <h2>
        <a
          aria-label="email"
          target="_blank"
          href={`mailto:${user}@${site}.com`}
        >
          <FiSend className="mx-2 inline" /> {user}@{site}.com
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
