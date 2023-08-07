import React from "react";

export default function Card(props: {
  header: string;
  subheader: string;
  img: JSX.Element;
  href: string;
}) {
  const { header, href, subheader, img } = props;
  return (
    <a
      className="p-3 dark:outline-white outline-black p-4 outline-1 outline"
      href={href}
    >
      <div className="text-xl">{header}</div>
      <div className="mt-1">{subheader}</div>
      <div className="mt-4">{img}</div>
    </a>
  );
}
