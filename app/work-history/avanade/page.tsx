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
      projectContent={<></>}
    />
  );
}
