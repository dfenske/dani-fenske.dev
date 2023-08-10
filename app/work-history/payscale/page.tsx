import WorkHistoryLayout from "@/app/components/work-history-layout";
import PayscaleLogo from "@/app/components/logos/payscale-logo";

export default function PayScale() {
  return (
    <WorkHistoryLayout
      title="PayScale"
      logo={<PayscaleLogo />}
      subtitle="Technical Lead, Sr. Software Engineer | Apr. 2017 - Dec. 2021"
      description="At PayScale, I worked on the consumer website where I maintained the salary survey that crowdsourced pay data, which is the core of the PayScale SaaS product. My team focused heavily on SEO, AB testing, and performance."
      technologies={[
        "React.js",
        "Next.js",
        "Node.js",
        "Sass",
        "Storybook",
        "C#",
        "Azure",
        "AWS",
      ]}
      skills={[
        "Responsive design",
        "SEO",
        "Build/deploy pipelines",
        "APIs",
        "Unit and UI testing",
        "Monitoring and alerting",
      ]}
      projectContent={<></>}
    />
  );
}
