import WorkHistoryLayout from "@/app/components/work-history-layout";
import SquareLogo from "@/app/components/logos/square-logo";

export default function Square() {
  return (
    <WorkHistoryLayout
      title="Square"
      subtitle="Senior Software Engineer | Jan. 2021 - Aug. 2021"
      sidebarLogo={<SquareLogo />}
      titleLogo={<SquareLogo />}
      description={
        <>
          At Square, I worked on the{" "}
          <a
            aria-label="Square Appointments"
            target="_blank"
            href="https://squareup.com/us/en/appointments"
          >
            Appointments
          </a>{" "}
          team which was a fully-remote team of Ember and Ruby developers. We
          were responsible for the Appointments product which allows sellers to
          schedule appointments with their customers.
        </>
      }
      skills={[
        "AB Testing",
        "Git",
        "Documentation",
        "Coding standards",
        "Mentoring",
      ]}
      technologies={["Ember.js", "Optimizely", "Handlebars"]}
      projectContent={
        <>
          <div className="my-4">
            During my time at Square, I contributed to the team by implementing
            a frontend standards framework. One part of this was during
            &quot;Fix-it Week&quot;, I implemented{" "}
            <span className="callout">linting for our handlebars files</span>{" "}
            since they had all sorts of whitespace issues, but no linter to
            standardize upon. I did this in two days, which may sound like a lot
            for adding a linter. But the{" "}
            <a
              aria-label="Handlebars linter"
              target="_blank"
              href="https://github.com/ember-template-lint/ember-template-lint#rules"
            >
              Handlebars linter unfortunately did not have an auto-fix feature
              for most rules
            </a>
            . So I updated ~400 files manually. This involved coordinating
            commits to avoid merge conflicts, breaking it down into manageable
            sized PRs, and moving fast to avoid merge conflicts with others.
            This work even{" "}
            <span className="callout">
              won me two prizes - &quot;most fixes&quot; and &quot;biggest
              fix&quot;
            </span>
            .
          </div>
          <div className="my-4">
            I became the expert on Optimizely, an AB testing platform, and wrote
            a doc which enabled other teams to onboard easily.
            <div className="quote">
              &quot;Thanks to Dani, the team kicked off its first growth
              experiment and is nicely set up for many more. Her perseverance in
              navigating unknown territory, quickly troubleshooting issues, and
              even creating a how-to guide illustrates her commitment to making
              great things happen. Thanks!&quot;
            </div>
          </div>
          <div className="my-4">
            I also had some{" "}
            <span className="callout">mentoring opportunities</span>. I held
            weekly 1-hour pairing sessions with a junior dev to make time to
            either work through my own tasks with her helping, or pair on her
            tasks and offer debugging tips and help her ask the right questions
            to the right people. I also setup the onboarding doc for a new team
            member.
          </div>
        </>
      }
    />
  );
}
