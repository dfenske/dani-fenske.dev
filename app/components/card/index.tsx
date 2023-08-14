import React from "react";

export default function Card(props: {
  header: string;
  className?: string;
  subheader?: string;
  img?: JSX.Element;
  href?: string;
  children?: React.ReactNode;
}) {
  const { header, href, subheader, img, children, className } = props;
  const content = (
    <div className={`${className ? className : ""}`}>
      <div className="text-xl min-h-[56px] border-b-[1px] border-oceanDark py-3">
        {header}
      </div>
      {subheader && <div className="mt-1 py-2 font-bold">{subheader}</div>}
      {img && <div className="mx-2 flex justify-center">{img}</div>}
      {children}
    </div>
  );
  return href ? (
    <a
      className="dark:text-white dark:hover:text-blue-200 text-black"
      aria-label={`${header}`}
      href={href}
    >
      {content}
    </a>
  ) : (
    <>{content}</>
  );
}
