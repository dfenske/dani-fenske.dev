import WorkHistoryLayout from "@/app/components/work-history-layout";
import OutreachLogo from "@/app/components/logos/outreach-logo";

export default function Outreach() {
  return (
    <WorkHistoryLayout
      title="Outreach"
      subtitle="Staff Software Engineer | Aug. 2021 - Oct. 2023"
      sidebarLogo={<OutreachLogo />}
      titleLogo={<OutreachLogo />}
      description="At Outreach, I began as a frontend engineer and eventually moved
      over to the backend to help out a team that needed more engineers."
      projectContent={
        <>
          <h4>Frontend Tooling and Design Library</h4>
          <p>
            For most of my time at Outreach, I was on the frontend
            infrastructure team. We owned the{" "}
            <span className="callout">design system</span>, the frontend CI/CD
            pipeline, and core services such as feature flagging and telemetry.
            We also created systems to enforce clean and consistent code
            authoring rules.
          </p>
          <p>
            The frontend was built using <span className="callout">React</span>{" "}
            and <span className="callout">TypeScript</span>, and we built our
            design system on top of{" "}
            <a aria-label="MaterialUI" href="https://mui.com/">
              Material UI
            </a>
            .
          </p>
          <p>
            Our customers were primarily other developers at Outreach, but we
            also owned some core application experiences.
          </p>
          <div className="quote">
            &quot;Dani&apos;s mastery of all tools big and small is
            noticeable.&quot;
          </div>
          <h4>Monolith Service Decomposition</h4>
          <p>
            After a year and a half at Outreach, I was loaned to a backend team
            to help with the{" "}
            <span className="callout">monolith decomposition</span> that so many
            software companies go through. This involved ramping up on{" "}
            <span className="callout">Golang</span> and{" "}
            <span className="callout">GraphQL</span> in a short period of time
            and working at a fast pace to meet upcoming deadlines.
          </p>
        </>
      }
      technologies={[
        "React",
        "TypeScript",
        "Golang",
        "GraphQL",
        "PostgreSQL",
        "Storybook",
        "MaterialUI",
      ]}
      skills={[
        "Project management",
        "Design System",
        "Troubleshooting",
        "Jira",
        "Lightning Talks",
        "Code reviews",
      ]}
    />
  );
}
