import Card from "../components/card";
import PayscaleLogo from "../../public/Payscale_Logo.png";
import AvanadeLogo from "../../public/Avanade_Logo.png";
import SquareLogo from "../../public/Square_Logo.png";
import OutreachLogo from "../../public/Outreach_Logo.png";

export default function WorkHistory() {
  return (
    <>
      <h1>Work History</h1>
      <div className="">
        <div className="flex justify-stretch">
          <a href="/work-history/avanade" className="flex-1">
            <Card
              header="Avanade - Consultant"
              subheader="Sep. 2014 - Dec. 2016"
              logoSrc={AvanadeLogo}
            />
          </a>
          <a href="/work-history/payscale" className="flex-1">
            <Card
              header="PayScale - Technical Lead, Sr. Software Engineer"
              subheader="Apr. 2017 - Dec. 2021"
              logoSrc={PayscaleLogo}
            />
          </a>
        </div>
        <div className="flex">
          <a href="/work-history/square" className="flex-1">
            <Card
              header="Square - Senior Software Engineer"
              subheader="Jan. 2021 - Aug. 2021"
              logoSrc={SquareLogo}
            />
          </a>
          <a href="/work-history/outreach" className="flex-1">
            <Card
              header="Outreach - Staff Software Engineer"
              subheader="Aug. 2021 - Present"
              logoSrc={OutreachLogo}
            />
          </a>
        </div>
      </div>
    </>
  );
}
