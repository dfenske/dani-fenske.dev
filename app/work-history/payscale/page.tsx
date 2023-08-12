import WorkHistoryLayout from "@/app/components/work-history-layout";
import PayscaleLogo from "@/app/components/logos/payscale-logo";

export default function PayScale() {
  return (
    <WorkHistoryLayout
      title="PayScale"
      sidebarLogo={<PayscaleLogo />}
      titleLogo={<PayscaleLogo />}
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
      projectContent={
        <>
          <div className="mb-4">
            Being at PayScale for 4 years, it&apos;s hard to sum up everything I
            worked on. PayScale is where I really got my start as a frontend
            developer and I had great mentors. We participated very regularly in
            vibrant Hack Weeks, which inspired a lot of exploration, even into
            areas like{" "}
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
                (the survey results page), which we rewrote in NextJS
              </li>
              <li>The design system, which we built using Storybook.</li>
              <li>
                The Research Center, which is the exploratory part of the
                website that displays salary information regarding companies and
                jobs. This was built using NextJS as well, which served the
                purpose of improving SEO, performance, and was able to generate
                millions of pages dynamically.
              </li>
            </ul>{" "}
          </div>
          <h3>Feedback from Peers</h3>
          <div className="quote">
            <div>
              Q: What can this person do differently to make your job easier?
            </div>
            <div className="ml-4">
              A: Literally nothing. Dani is so awesome at what she does!
            </div>

            <div>
              Q: Highlight some ways that this individual impacts the business.
            </div>
            <div className="ml-4">
              A: Dani is the powerhouse behind the growth team. Without her,
              many of the things that we&apos;ve worked on would not exist. The
              RCW was her pilot project for moving to node.js, e-commerce
              wouldn&apos;t exist, among many other large pieces of our site.
            </div>
            <div>Q: Add any additional feedback you have for this person.</div>
            <div className="ml-4">
              A: Dani rocks. She&apos;s my favorite person to work with on the
              team. She&apos;s organized, timely, and keeps notes on everything
              she&apos;s ever worked on or touched inside PayScale&apos;s large
              technical platform. She&apos;s always willing to help, always
              willing to dive into tough problems with lots of unknowns, and
              always a great sounding board for ideas or there if you just need
              to vent.
            </div>
          </div>
        </>
      }
    />
  );
}
