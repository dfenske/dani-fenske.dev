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
      className="p-4 dark:bg-green-950 dark:text-white dark:border-white border-emerald-900 border-2 bg-white text-emerald-900 rounded-lg max-w-[500px]"
      href={href}
    >
      <div className="text-xl min-h-[56px] border-b-[1px] border-oceanDark py-3">
        {header}
      </div>
      <div className="mt-1 pt-4">{subheader}</div>
      <div className="m-5 flex justify-center">{img}</div>
    </a>
  );
}
