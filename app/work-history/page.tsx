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
      <Timeline>
        <Card
          header="Outreach"
          subheader="Staff Software Engineer | Aug. 2021 - Present"
          img={
            <div className="h-[100px]">
              <OutreachLogo />
            </div>
          }
          href="/work-history/outreach"
          className="p-4"
        />
        <Card
          header="Square"
          subheader="Senior Software Engineer | Jan. 2021 - Aug. 2021"
          img={
            <div className="h-[100px]">
              <SquareLogo />
            </div>
          }
          href="/work-history/square"
          className="p-4"
        />
        <Card
          header="PayScale"
          subheader="Technical Lead, Sr. Software Engineer | Apr. 2017 - Dec. 2021"
          img={
            <div className="h-[100px]">
              <PayscaleLogo />
            </div>
          }
          href="/work-history/payscale"
          className="p-4"
        />
        <Card
          header="Avanade"
          subheader="Consultant | Sep. 2014 - Dec. 2016"
          img={
            <div className="h-[100px]">
              <AvanadeLogo />
            </div>
          }
          href="/work-history/avanade"
          className="p-4"
        />
      </Timeline>
    </>
  );
}
