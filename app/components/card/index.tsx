import React from "react";

export default function Card(props: {
  header: string;
  subheader: string;
  img: JSX.Element;
  href: string;
}) {
  const { header, href, subheader, img } = props;
  return (
    <a href={href}>
      <div className="p-4">
        <div className="text-xl min-h-[56px] border-b-[1px] border-oceanDark py-3">
          {header}
        </div>
        <div className="mt-1 pt-4">{subheader}</div>
        <div className="m-5 flex justify-center h-[100px]">{img}</div>
      </div>
    </a>
  );
}
