import React from "react";
import WorkHistoryLayout from "@/app/components/work-history-layout";
import AvanadeLogo from "@/app/components/logos/avanade-logo";

export default function Avanade() {
  return (
    <WorkHistoryLayout
      title="Avanade"
      subtitle="Consultant | Sep. 2014 - Dec. 2016"
      logo={<AvanadeLogo />}
      description="I began as an Analyst and worked my way up to Consultant level, working as a vendor at companies such as Microsoft and Ecolab on IoT projects using Microsoft Azure and C#."
      skills={[
        "Client interaction",
        "Communication",
        "Self motivation",
        "Rapid ramp-up",
        "Cloud service exams",
      ]}
      technologies={["C#", "Microsoft Azure", "Internet of Things"]}
      projectContent={
        <>
          <div className="mb-4">
            Avanade is a consultancy jointly owned by Accenture and Microsoft.
            Therefore, most of my work was focused on C# and Azure cloud
            solutions. I passed many Azure exams to get certified as an{" "}
            <span className="callout">Azure Solutions Architect</span>.{" "}
          </div>
          <div>
            My last project was at Ecolab, where I travelled to Minneapolis
            every week for a few months. I served as the{" "}
            <span className="callout">
              Application Lead for a team of 6 developers
            </span>
            . I led the effort to design, build and configure applications,
            acting as the primary point of contact with the client. This role
            required in-depth experience in developing production apps using
            Azure IoT, Azure Stream Analytics, .NET, Azure SQL/Hive, and REST
            APIs.
          </div>
          <div className="quote">
            &quot;Danielle not only managed her team but also interacted with
            various members of the client&apos;s team in ensuring we delivered a
            quality solution. Ecolab&apos;s Enterprise Architect has
            complimented on her technical skills and leadership abilities
            several times during the course of the project.&quot;
          </div>
          <div className="quote">
            Danielle is a fantastic developer and a natural leader who is well
            respected by her team. She has a done a marvelous job in helping me
            manage the delivery of a complex IoT project at Ecolab. Always eager
            to learn and teach others everything she knows, her enthusiasm and
            open-book approach is downright infectious.
          </div>
        </>
      }
    />
  );
}
