import WorkHistoryLayout from "@/app/components/work-history-layout";
import PayscaleLogo from "@/app/components/logos/payscale-logo";

export default function PayScale() {
  return (
    <WorkHistoryLayout
      title="PayScale"
      sidebarLogo={<PayscaleLogo />}
      titleLogo={<PayscaleLogo />}
      subtitle="Technical Lead, Sr. Software Engineer | Apr. 2017 - Dec. 2021"
      description="At PayScale, I worked on the consumer website where I maintained the salary survey that crowdsources pay data, which is the core of the PayScale SaaS product. My team focused heavily on SEO, AB testing, and performance."
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
      projectContent={
        <>
          <div className="mb-4">
            Having worked at PayScale for 4 years, it&apos;s difficult to sum up
            everything I worked on. PayScale is where I got my start as a
            frontend developer and I had great mentors. I participated regularly
            in vibrant Hack Weeks, which inspired a lot of exploration, even
            into areas like{" "}
            <a aria-label="PayScale 404" href="https://www.payscale.com/404">
              animation
            </a>
            . The engineering team was small so I got to dip my toes into many
            areas -{" "}
            <span className="callout">
              backend, frontend, data, CI/CD, design system, APIs, AB testing,
              Azure, networking
            </span>
            , you name it.
          </div>
          <div className="mb-4">
            Our team&apos;s charter was broad. I focused for long periods of
            time on things like:
            <ul className="list-disc ml-4">
              <li>
                The{" "}
                <a
                  aria-label="PayScale Survey"
                  href="https://www.payscale.com/survey/"
                >
                  salary survey
                </a>
                , which was powered by React and Redux
              </li>
              <li>
                The{" "}
                <a
                  aria-label="PayScale report"
                  href="https://www.payscale.com/mypayscale.aspx"
                >
                  MyPayscale page
                </a>{" "}
                (the survey results page), which we rewrote in NextJS.
              </li>
              <li>The design system, which we documented using Storybook.</li>
              <li>
                The Research Center, which is the exploratory part of the
                website that displays salary information regarding companies and
                jobs. This was built using NextJS as well, which served the
                purpose of improving SEO, performance, and was able to generate
                millions of pages dynamically.
              </li>
            </ul>{" "}
          </div>
          <div className="quote">
            Dani is organized, timely, and keeps notes on everything she&apos;s
            ever worked on or touched inside PayScale&apos;s large technical
            platform. She&apos;s always willing to help, always willing to dive
            into tough problems with lots of unknowns, and always a great
            sounding board for ideas or there if you just need to vent.
          </div>
        </>
      }
    />
  );
}
