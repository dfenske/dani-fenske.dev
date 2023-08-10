import WorkHistoryLayout from "@/app/components/work-history-layout";
import SquareLogo from "@/app/components/logos/square-logo";

export default function Square() {
  return (
    <WorkHistoryLayout
      title="Square"
      subtitle="Senior Software Engineer | Jan. 2021 - Aug. 2021"
      logo={<SquareLogo />}
      description={
        <>
          At Square, (now known as Block), I worked on the{" "}
          <a href="https://squareup.com/us/en/appointments">Appointments</a>{" "}
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
      projectContent={<p></p>}
    />
  );
}
