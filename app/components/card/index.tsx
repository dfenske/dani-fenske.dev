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
      {subheader && <div className="mt-1 py-2">{subheader}</div>}
      {img && <div className="mx-2 flex justify-center">{img}</div>}
      {children}
    </div>
  );
  return href ? <a href={href}>{content}</a> : <>{content}</>;
}
