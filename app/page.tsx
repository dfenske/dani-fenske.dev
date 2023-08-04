"use client";

import Image from "next/image";
import profilePic from "../public/Headshot.png";
import { useState, useEffect } from "react";

export default function Home() {
  const handWavingEmoji = "\u{1F44B}";
  const message = `${handWavingEmoji} Hi, my name is Dani Fenske.`;
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(
        Array.from(message)
          .slice(0, text.length + 1)
          .join("")
      );
    }, 100);
    return () => clearTimeout(timeout);
  }, [text, message]);

  return (
    <>
      <Image
        src={profilePic}
        alt="Picture of me"
        width={300}
        height={300}
        className="mx-auto"
        blurDataURL="./Headshot-small.png"
        placeholder="blur"
        priority
      />
      <h1 className="text-center my-2 blinking-cursor min-h-[6rem] md:min-h-[12rem]">
        {text}
      </h1>
      <p className="mx-auto md:w-1/2 text-justify">
        I am a software engineer in Seattle, WA. I spend my time creating
        websites using React and TypeScript. I have also been known to venture
        from time to time towards the backend, with Golang and C#.
      </p>
    </>
  );
}
