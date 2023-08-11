"use client";

import Image from "next/image";
import profilePic from "../public/Headshot.png";
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
    <>
      <div className="image-container w-[300px] h-[300px] self-center">
        {!imageVisible && <div className="shimmering-skeleton" />}
        <Image
          src={profilePic}
          alt="Picture of me"
          width={300}
          height={300}
          className="image mx-auto rounded-full  dark:border-white border-transparent"
          onLoad={() => setImageVisible(true)}
          priority
        />
      </div>
      <h1 className="text-center my-2 blinking-cursor">{heading}</h1>
      <h2
        className={`mx-auto mt-4 md:w-1/2 text-center transition-[opacity] duration-[1300ms] ease-in-out delay-500 ${
          paragraphShown ? "opacity-1" : "opacity-0"
        }`}
      >
        I am a full-stack software engineer in Seattle, WA, specializing in
        creating websites using React and TypeScript.
        <br />
        <br />I will join your team and ramp up fast, document everything I
        learn, and contribute in meaningful ways not only to the code base, but
        to the team culture as well.
      </h2>
    </>
  );
}
