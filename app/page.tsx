import Image from "next/image";
import profilePic from "../public/Headshot.png";

export default function Home() {
  return (
    <>
      <Image
        src={profilePic}
        alt="Picture of me"
        width={300}
        height={300}
        className="mx-auto"
      />
      <h1 className="text-center my-2">👋🏼 My name is Dani Fenske.</h1>
      <p className="mx-auto md:w-1/2 text-justify">
        I am a software engineer in Seattle, WA. I spend my time creating
        websites using React and TypeScript. I have also been known to venture
        from time to time towards the backend, with Golang and C#.
      </p>
    </>
  );
}
