import Card from "../components/card";
import PayscaleLogo from "../components/logos/payscale-logo";
import AvanadeLogo from "../components/logos/avanade-logo";
import SquareLogo from "../components/logos/square-logo";
import OutreachLogo from "../components/logos/outreach-logo";
import Timeline from "../components/timeline";

export default function WorkHistory() {
  return (
    <>
      <h1 className="self-center">Work History</h1>
      <Timeline>
        <>
          <div className="timeline-date">Aug. 2021 - Present</div>
          <Card
            header="Outreach"
            subheader="Staff Software Engineer"
            img={
              <div className="h-[100px]">
                <OutreachLogo />
              </div>
            }
            href="/work-history/outreach"
            className="p-4"
          />
        </>
        <>
          <div className="timeline-date">Jan. 2021 - Aug. 2021</div>
          <Card
            header="Square"
            subheader="Senior Software Engineer"
            img={
              <div className="h-[100px]">
                <SquareLogo />
              </div>
            }
            href="/work-history/square"
            className="p-4"
          />
        </>
        <>
          <div className="timeline-date">Apr. 2017 - Dec. 2021</div>
          <Card
            header="PayScale"
            subheader="Technical Lead, Sr. Software Engineer"
            img={
              <div className="h-[100px]">
                <PayscaleLogo />
              </div>
            }
            href="/work-history/payscale"
            className="p-4"
          />
        </>
        <>
          <div className="timeline-date">Sep. 2014 - Dec. 2016</div>
          <Card
            header="Avanade"
            subheader="Consultant"
            img={
              <div className="h-[100px]">
                <AvanadeLogo id="timeline" />
              </div>
            }
            href="/work-history/avanade"
            className="p-4"
          />
        </>
      </Timeline>
    </>
  );
}
