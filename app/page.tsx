"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const handWavingEmoji = "\u{1F44B}";
  const message = `${handWavingEmoji} Hi, my name is Dani Fenske.`;
  const [heading, setHeading] = useState("");
  const [paragraphShown, setParagraphShown] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

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
    <div className="page flex flex-col">
      <div className="rounded-full bg-[#5788a7] overflow-hidden relative w-[300px] h-[300px] self-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="./Headshot.png"
          alt="Picture of me"
          width={300}
          height={300}
          className="rounded-full dark:border-white border-transparent"
          onLoad={() => setImageVisible(true)}
          fetchPriority="high"
        />
      </div>
      <h1 className="text-center my-2 blinking-cursor">{heading}</h1>
      <h2
        className={`mt-4 text-center transition-[opacity] duration-[1300ms] ease-in-out delay-500 ${
          paragraphShown ? "opacity-1" : "opacity-0"
        }`}
      >
        I am a full-stack software engineer in Seattle, WA, specializing in
        creating websites using React and TypeScript.
        <br />
        <br />
        If I join your team, I&apos;ll quickly learn and share everything I
        discover, making valuable contributions to the code as well as the team
        culture.
      </h2>
    </div>
  );
}
