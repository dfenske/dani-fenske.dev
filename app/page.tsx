"use client";

import Image from "next/image";
import profilePic from "../public/Headshot.png";
import { useState, useEffect } from "react";

export default function Home() {
  const handWavingEmoji = "\u{1F44B}";
  const message = `${handWavingEmoji} Hi, my name is Dani Fenske.`;
  const blurb =
    "I am a full-stack software engineer in Seattle, WA, specializing in creating websites using React and TypeScript.";
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");

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
    } else if (blurb !== paragraph) {
      const timeout = setTimeout(() => {
        setParagraph(
          Array.from(blurb)
            .slice(0, paragraph.length + 1)
            .join("")
        );
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [heading, message, paragraph]);

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
      <h1 className="text-center my-2 blinking-cursor">{heading}</h1>
      <p className="mx-auto md:w-1/2 text-center">{paragraph}</p>
    </>
  );
}
