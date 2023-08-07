import React from "react";
import Image, { StaticImageData } from "next/image";

export default function Card(props: {
  header: string;
  subheader: string;
  logoSrc: StaticImageData;
}) {
  const { header, subheader, logoSrc: logo } = props;
  return (
    <div className="p-3 dark:outline-white outline-black p-4 outline-1 outline m-3">
      <div className="text-xl">{header}</div>
      <div className="mt-1">{subheader}</div>
      <Image src={logo} alt="logo" width={200} className="mt-4" />
    </div>
  );
}
