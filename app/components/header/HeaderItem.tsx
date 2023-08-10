import React from "react";
import { Tooltip } from "react-tooltip";

export default function HeaderItem(props: {
  text: string;
  href: string;
  id: string;
  icon: React.ReactNode;
}) {
  const { href, id, icon, text } = props;
  return (
    <>
      <Tooltip id={id} className="tooltip" />
      <a
        data-tooltip-id={id}
        href={href}
        data-tooltip-content={text}
        data-tooltip-place="bottom"
        className="mx-2 text-slate-900"
      >
        {icon}
      </a>
    </>
  );
}
