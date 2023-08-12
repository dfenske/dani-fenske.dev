"use client";

import { Tooltip } from "react-tooltip";
import Card from "../card";
import { FiArrowLeftCircle } from "react-icons/fi";

export default function WorkHistoryLayout(props: {
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  projectContent: React.ReactNode;
  technologies: string[];
  skills: string[];
  /** We have a sidebarLogo and a titleLogo which are the same logo, merely because SVGs have a way of
   * hiding each other when there are two of the same SVG on the page and you just want to hide one.
   * I tried many workarounds and got fed up and went with this hack for now. */
  sidebarLogo?: JSX.Element;
  titleLogo?: JSX.Element;
}) {
  const {
    title,
    subtitle,
    description,
    projectContent: content,
    technologies,
    skills,
    sidebarLogo,
    titleLogo,
  } = props;
  return (
    <div className="flex-1 flex flex-col sm:flex-row justify-between">
      <div className="sm:mr-3 sm:max-w-[800px]">
        <h1 className="flex align-center">
          <Tooltip id="back-arrow" className="tooltip hidden sm:block mt-1" />
          <a
            href="/work-history"
            data-tooltip-id="back-arrow"
            data-tooltip-content="Work History"
            data-tooltip-place="top"
            className="flex items-center mr-3"
            aria-label="Work History"
          >
            <FiArrowLeftCircle
              style={{ display: "inline-block", fontSize: "2rem" }}
            />
          </a>
          {title}
          <div className="display:block sm:hidden h-10 ml-3">{titleLogo}</div>
        </h1>
        <h2>{subtitle}</h2>
        <h3>{description}</h3>
        <h3>Projects</h3>
        {content}
      </div>
      <div className="flex flex-col sm:max-w-[200px] sm:p-3 sm:border-l-[1px] sm:border-slate-200">
        <div className="hidden sm:block max-h-[100px]">{sidebarLogo}</div>
        <Card header="Technologies" className="sm:p-4">
          <ul className="list-disc ml-4 mt-1">
            {technologies.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Card>
        <Card header="Skills" className="sm:p-4">
          <ul className="list-disc ml-4 mt-1">
            {skills.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
