"use client";

import Image from "next/image";
import profilePic from "../public/Headshot.png";
import { useState, useEffect } from "react";

export default function Home() {
  const handWavingEmoji = "\u{1F44B}";
  const message = `${handWavingEmoji} Hi, my name is Dani Fenske.`;
  const [heading, setHeading] = useState("");
  const [paragraphShown, setParagraphShown] = useState(false);

  useEffect(() => {
    if (message !== heading) {
      const timeout = setTimeout(() => {
        setHeading(
          Array.from(message)
            .slice(0, heading.length + 1)
            .join("")
        );
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setParagraphShown(true);
    }
  }, [heading, message]);

  return (
    <>
      <Image
        src={profilePic}
        alt="Picture of me"
        width={300}
        height={300}
        className="mx-auto rounded-full border-4 dark:border-white border-transparent"
        blurDataURL="./Headshot-small.png"
        placeholder="blur"
        priority
      />
      <h1 className="text-center my-2 blinking-cursor">{heading}</h1>
      <h2
        className={`mx-auto mt-4 md:w-1/2 text-center transition-[opacity] duration-[1300ms] ease-in-out delay-500 ${
          paragraphShown ? "opacity-1" : "opacity-0"
        }`}
      >
        I am a full-stack software engineer in Seattle, WA, specializing in
        creating websites using React and TypeScript.
      </h2>
    </>
  );
}
