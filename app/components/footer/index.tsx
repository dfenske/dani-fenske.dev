import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mb-3">
      <div className="flex justify-center text-3xl p-2">
        <a
          aria-label="Github page"
          href="https://github.com/dfenske"
          target="_blank"
        >
          <FiGithub className="mx-2" />
        </a>
        <a
          aria-label="LinkedIn page"
          href="https://www.linkedin.com/in/daniellefenske/"
          target="_blank"
        >
          <FiLinkedin className="mx-2" />
        </a>
      </div>
      <div className="text-xs text-center">
        This site was optimized using{" "}
        <a href="https://www.deque.com/axe-devtools-accessibility-testing/">
          axe DevTools
        </a>{" "}
        and <a href="">Lighthouse</a>.
      </div>
    </footer>
  );
}
