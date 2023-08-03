import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex justify-center text-3xl p-2">
      <a href="https://github.com/dfenske">
        <FiGithub className="mx-2" />
      </a>
      <a href="https://www.linkedin.com/in/daniellefenske/">
        <FiLinkedin className="mx-2" />
      </a>
    </footer>
  );
}
