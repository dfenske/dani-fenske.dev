import Image from "next/image";
import profilePic from "../public/Headshot.png";

export default function Home() {
  return (
    <div>
      <Image src={profilePic} alt="Picture of me" width={300} height={300} />
      <h1>👋🏼 My name is Dani Fenske.</h1>
      <p>
        I am a software engineer in Seattle, WA. I spend my time creating
        websites using React and TypeScript, and I have been known to venture to
        the backend towards Golang and C#.{" "}
      </p>
      <ul>
        <li>
          <a href="/education">Education</a>
        </li>
        <li>
          <a href="/work-history">Work History</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/blog-posts">Blog Posts</a>
        </li>
      </ul>
    </div>
  );
}
