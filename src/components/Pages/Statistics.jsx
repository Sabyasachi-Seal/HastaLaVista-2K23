import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading2 from "../SectionHeading/SectionHeading2";
import Spacing from "../Spacing";
import Team2 from "../Team/Team2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./svgClasses.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Placed", "On Internship", "Yet to be Placed"],
  datasets: [
    {
      label: "Placement Records",
      data: [125, 10, 19],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Statistics() {
  pageTitle("Placement Records");
  const [itemShow, setItemShow] = useState(8);
  const companies = [
    "JusPay",
    "Virtusa",
    "Informatica ( INFAthon)",
    "Hyland Software - Summer",
    "Cognizant (GenC Next & Pro)",
    "Twilio - Summer internship",
    "Persistent Summer Internship",
    "Atlan Internship",
    "Informatica",
    "Intel",
    "Nutanix",
    "Thoughtworks",
    "TCS Digital",
    "Exavalu",
    "Cadence Design",
    "Tiger Analytics",
    "Maventics",
    "Hanu Insight",
    "Talentise Global",
    "Unified Infotech",
    "Telaverge Communications",
    "Infosys",
    "StockEdge",
    "Keysight Technology",
    "Microsoft",
    "Cognida.ai",
    "NRIFT (Nomura)",
    "Ernst & Young",
    "Dell Technologies",
    "Amazon AWS",
    "Celebal Technologies",
    "Prolifics",
    "HEXAWARE TECHNOLOGIES ",
    "Argusoft India Ltd.",
    "Alumnus Software",
    "ITC INFOTECH",
    "Persistent Systems",
    "Virtusa Neural Hack Season 6",
    "CloudKaptan",
    "Tech Mahindra",
    "LTI (Larsen & Toubro Infotech)",
    "Sopra Steria ",
    "Blueflame",
    "Cognizant (GenC & GenC Elevate)",
    "Cozeva",
    "DeltaX",
    "ValueMomentum",
    "PoleStar",
    "Streebo",
    "Relcon Systems",
    "Johnson Controls",
    "ARC Document Solutions India Pvt. Ltd",
    "ZemosoLabs",
    "Merce Technologies",
    "TCG Digital",
    "Clinisys",
    "GeoTech",
    "Schaeffler",
    "ChannelPlay",
    "LABVANTAGE Solutions Pvt. Ltd",
    "Zenatix Solutions Pvt. Ltd",
    "IBM CodeKnack (NQT) -CIC",
    "Bentley Systems",
    "Hoonar Tekwurks Pvt Ltd",
    "Subex",
    "CBNITS",
    "Arthmate",
    "Nihilent Limited",
    "Nucleus Software",
    "TM International Logistics",
    "Aloha Technology ",
    "BASSETTI",
    "Salesforce FTE",
    "Nevaeh Technology",
    "Deloitte",
    "Kovair Software",
    "Planetspark",
    "Amazon VCS",
    "Hind Rectifiers",
    "Enate",
    "Mjunction",
    "EasyEcom",
    "NxtWave",
    "Motorola",
    "MGH Group",
    "Calsoft",
    "Lumen Technologies",
    "Codeyoung",
    "Hyland Software",
    "Accolite",
    "Tata Steel",
    "Informatica ( INFAthon)",
    "CVENT",
    "Data Consultants Corporation (DCC)",
    "Amazon Captive",
    "TCS Digital",
    "Rxefy Tech Private Limited",
    "Digiboxx (Codathon)",
    "Microland",
    "ZURU Group",
    "Lexmark",
    "MU Sigma",
    "Pharmaquant",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Placement Statistics"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading2
          title="The Numbers Speak for Themselves"
          subtitle="Our Placement Statistics"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="recordContainer">
          <Div className="chartContainer">
            <Pie className="chartContainer" data={data} />
          </Div>
          <Div className="svgContainer">
            <svg viewBox="0 0 1920 1080">
              <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="20%">
                  27 LPA
                </text>
                <text text-anchor="middle" x="50%" y="60%">
                  Juspay (FTE)
                </text>
                <text text-anchor="middle" x="50%" y="100%">
                  Highest Package
                </text>
              </symbol>

              <g class="g-ants">
                <use xlinkHref="#s-text" class="letter"></use>
                <use xlinkHref="#s-text" class="letter"></use>
                <use xlinkHref="#s-text" class="letter"></use>
                <use xlinkHref="#s-text" class="letter"></use>
                <use xlinkHref="#s-text" class="letter"></use>
              </g>
            </svg>
          </Div>
        </Div>
      </Div>

      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading2
          title="Companies Hiring Us"
          subtitle="Our seniors have been placed in the following companies"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {companies.slice(0, itemShow).map((item, index) => (
            <Div key="" className="col-lg-3 col-sm-6">
              <Team2 memberName={item} memberDesignation="2023" />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Div className="text-center">
          {companies.length <= itemShow ? (
            ""
          ) : (
            <>
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>More Companies Hiring</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>

        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="Wanna be a part of Hasta La <br />Vista 2K23?"
            btnText="Register for Event"
            btnLink="https://lu.ma/event/evt-xNs3p4DfZd56WHG"
            data-luma-action="checkout"
            data-luma-event-id="evt-xNs3p4DfZd56WHG"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
