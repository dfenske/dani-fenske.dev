import Card from "../components/card";
import PayscaleLogo from "../components/logos/payscale-logo";
import AvanadeLogo from "../components/logos/avanade-logo";
import SquareLogo from "../components/logos/square-logo";
import OutreachLogo from "../components/logos/outreach-logo";

export default function WorkHistory() {
  return (
    <>
      <h1>Work History</h1>
      <div className="">
        <div className="grid md:grid-cols-2 gap-4 ">
          <Card
            header="Avanade - Consultant"
            subheader="Sep. 2014 - Dec. 2016"
            img={<AvanadeLogo />}
            href="/work-history/avanade"
          />
          <Card
            header="PayScale - Technical Lead, Sr. Software Engineer"
            subheader="Apr. 2017 - Dec. 2021"
            img={<PayscaleLogo />}
            href="/work-history/payscale"
          />
          <Card
            header="Square - Senior Software Engineer"
            subheader="Jan. 2021 - Aug. 2021"
            img={<SquareLogo />}
            href="/work-history/square"
          />
          <Card
            header="Outreach - Staff Software Engineer"
            subheader="Aug. 2021 - Present"
            img={<OutreachLogo />}
            href="/work-history/outreach"
          />
        </div>
      </div>
    </>
  );
}
