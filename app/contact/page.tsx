"use client";

import { FiGithub, FiLinkedin, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  // Very simple email obfuscation
  const handleClick = () => {
    window.location.href = "mailto:dani.fenske@gmail.com";
  };

  return (
    <>
      <h1>Contact</h1>
      <h2>
        <a
          className="cursor-pointer"
          aria-label="email"
          target="_blank"
          onClick={handleClick}
        >
          <FiSend className="mx-2 inline" />
          dani.fenske[at]gmail.com
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
