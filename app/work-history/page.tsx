import Card from "../components/card";
import PayscaleLogo from "../components/logos/payscale-logo";
import AvanadeLogo from "../components/logos/avanade-logo";
import SquareLogo from "../components/logos/square-logo";
import OutreachLogo from "../components/logos/outreach-logo";
import Timeline from "../components/timeline";

export default function WorkHistory() {
  return (
    <>
      <h1>Work History</h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-4 align-center max-w-[1000px]"></div>
      </div>
      <Timeline>
        <Card
          header="Outreach"
          subheader="Staff Software Engineer | Aug. 2021 - Present"
          img={<OutreachLogo />}
          href="/work-history/outreach"
        />
        <Card
          header="Square"
          subheader="Senior Software Engineer | Jan. 2021 - Aug. 2021"
          img={<SquareLogo />}
          href="/work-history/square"
        />
        <Card
          header="PayScale"
          subheader="Technical Lead, Sr. Software Engineer | Apr. 2017 - Dec. 2021"
          img={<PayscaleLogo />}
          href="/work-history/payscale"
        />
        <Card
          header="Avanade"
          subheader="Consultant | Sep. 2014 - Dec. 2016"
          img={<AvanadeLogo />}
          href="/work-history/avanade"
        />
      </Timeline>
    </>
  );
}
