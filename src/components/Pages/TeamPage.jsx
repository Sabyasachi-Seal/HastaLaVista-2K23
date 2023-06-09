import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading2 from "../SectionHeading/SectionHeading2";
import Spacing from "../Spacing";
import Team from "../Team";
import Team2 from "../Team/Team2";

export default function TeamPage() {
  pageTitle("Students");
  const [itemShow, setItemShow] = useState(8);
  const teamData = [
  
    {
      memberImage: "/images/profilepics/aishwaryasaha.jpg",
      memberName: "Aishwarya Saha",
      memberDesignation: "Convenor",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/aishwarya-saha-79143614a",
        twitter: "",
        insta: "https://instagram.com/i_m_possible13?igshid=ZDdkNTZiNTM=",
        facebook:
          "https://www.facebook.com/aishwarya.saha.5283?mibextid=ZbWKwL",
      },
    },
    {
      memberImage: "/images/profilepics/nibirdas.jpg",
      memberName: "Nibir Das",
      memberDesignation: "Co-Convenor",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/nibir-das-a6570b203/",
        twitter: "",
        insta: "https://www.instagram.com/_.its._.avi._/",
        facebook: "https://www.facebook.com/NibirDas29/",
      },
    },
    {
      memberImage: "/images/profilepics/sabyasachiseal.jpg",
      memberName: "Sabyasachi Seal",
      memberDesignation: "Technical Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/sabyasachi-seal-4461711bb/",
        twitter: "https://twitter.com/sabyasachi_seal",
        insta: "https://www.instagram.com/sealmydeal_/",
        facebook: "",
      },
    },
    {
      memberImage: "/images/profilepics/nikitasingh.jpeg",
      memberName: "Nikita Singh",
      memberDesignation: "Co-Technical Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/nikita-singh-385224218/",
        twitter: "",
        insta: "https://www.instagram.com/nikita_xingh/",
        facebook: "",
      },
    },
    {
      memberImage: "/images/profilepics/anneshchatterjee.jpg",
      memberName: "Annesh Chatterjee",
      memberDesignation: "Co-External Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/annesh-chatterjee-696b401bb",
        twitter:
          "https://twitter.com/AnneshChatterj3?t=HO6In58h57cHM4oGGupbwg&s=09",
        insta: "https://instagram.com/annesh__thamuz?igshid=NzMyMjgxZWIzNw==",
        facebook:
          "https://www.facebook.com/annesh.chatterjee.50?mibextid=ZbWKwL",
      },
    },
    {
      memberImage: "/images/profilepics/uttkarshranjan.jpg",
      memberName: "Uttkarsh Ranjan",
      memberDesignation: "Co-Management Head",
      memberSocial: {
        linkedin: "",
        twitter: "",
        insta: "",
        facebook: "",
      },
    },
    {
      memberImage: "/images/profilepics/arnabchakraborty.jpg",
      memberName: "Arnab Chakraborty",
      memberDesignation: "External Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/arnab-chakraborty27/",
        twitter: "https://twitter.com/ARNABCH27",
        insta: "https://www.instagram.com/c_arnab27/",
        facebook: "https://www.facebook.com/arnab.chakraborty.77770/",
      },
    },
    {
      memberImage: "/images/profilepics/abhipreyaghosh.png",
      memberName: "Abhipreya Ghosh",
      memberDesignation: "Co-Sponsor Head",
      memberSocial: {
        linkedin: "",
        twitter: "",
        insta: "",
        facebook: "",
      },
    },
    {
      memberImage: "/images/profilepics/soumilibhattacharya.jpg",
      memberName: "Soumili Bhattacharya",
      memberDesignation: "Cultural Head",
      memberSocial: {
        linkedin: "",
        twitter: "",
        insta: "",
        facebook: "",
      },
    },
    {
      memberImage: "/images/profilepics/sayanpaul.jpg",
      memberName: "Sayan Paul",
      memberDesignation: "Graphics Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/mwlite/in/sayan-paul-9603b620a",
        twitter: "https://mobile.twitter.com/sayan_paulll",
        insta: "https://www.instagram.com/sayan_paulll/",
        facebook: "https://m.facebook.com/sayan.paul.73113",
      },
    },
    
    {
      memberImage: "/images/profilepics/meghadrikoley.jpg",
      memberName: "Meghadri Koley",
      memberDesignation: "Co-Graphics Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/meghadri-koley-165018203",
        twitter:
          "https://twitter.com/MeghadriKoley?t=NTgIALnXpFNRCEJhTT3dzQ&s=09",
        insta: "https://www.instagram.com/m_eghadr_i_kole_y/",
        facebook: "https://www.facebook.com/dibyendu.koley.106?mibextid=ZbWKwL",
      },
    },
  
    
    {
      memberImage: "/images/profilepics/aryakbhattacharya.jpg",
      memberName: "Aryak Bhattacharya",
      memberDesignation: "Co-Photography Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/aryakbhattacharya/",
        twitter: "",
        insta: "https://www.instagram.com/zeus_1_6_/",
        facebook: "https://www.facebook.com/Aryakbhattacharya",
      },
    },
    {
      memberImage: "/images/profilepics/parijatsaha.jpg",
      memberName: "Parijat Saha",
      memberDesignation: "Sponsor Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/parijatsaha",
        twitter: "",
        insta: "https://instagram.com/parijatsaha?igshid=ZDdkNTZiNTM=",
        facebook:
          "https://www.facebook.com/profile.php?id=100069094217343&mibextid=ZbWKwL",
      },
    },
    
    {
      memberImage: "/images/profilepics/srimontibanerjee.jpg",
      memberName: "Srimonti Banerjee",
      memberDesignation: "PR Head",
      memberSocial: {
        linkedin: "",
        twitter: "",
        insta: "https://instagram.com/srimontibanerjee?igshid=ZDdkNTZiNTM=",
        facebook:
          "https://www.facebook.com/profile.php?id=100072057978613&mibextid=ZbWKwL",
      },
    },
    {
      memberImage: "/images/profilepics/swabarnabanerjee.jpg",
      memberName: "Swabarna Banerjee",
      memberDesignation: "Co-Cultural Head",
      memberSocial: {
        linkedin: "",
        twitter: "",
        insta: "https://instagram.com/alley8929?igshid=MGNiNDI5ZTU=",
        facebook:
          "https://www.facebook.com/swabarna.banerjee.566?mibextid=ZbWKwL",
      },
    },
    {
      memberImage: "/images/profilepics/shubhadeepsaha.jpg",
      memberName: "Shubhadeep Saha",
      memberDesignation: "Decoration Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/shubhadeep-saha-a63637200",
        twitter: "",
        insta: "www.instagram.com/suvo.deep.saha",
        facebook:
          "https://www.facebook.com/profile.php?id=100014793962203&mibextid=ZbWKwL",
      },
    },
    
    {
      memberImage: "/images/profilepics/sohampatra.jpg",
      memberName: "Soham Patra",
      memberDesignation: "Co-Finance Head",
      memberSocial: {
        linkedin: "https://www.linkedin.com/in/soham-patra-a0705017a/",
        twitter: "",
        insta: "https://www.instagram.com/sohampat1512/",
        facebook:
          "https://www.facebook.com/profile.php?id=100026268649220&mibextid=ZbWKwL",
      },
    },
    {
      memberImage: "/images/profilepics/shayambhavibakshi.jpg",
      memberName: "Shayambhavi Bakshi",
      memberDesignation: "PR Co-Head",
      memberSocial: {
        linkedin: "https://in.linkedin.com/in/shayambhavi-bakshi-871a42237",
        twitter: "",
        insta: "https://instagram.com/shayambhavi_bakshi_02",
        facebook: "https://www.facebook.com/shayambhavi.bakshi?mibextid=ZbWKwL",
      },
    },
    {
      memberImage: "/images/profilepics/aditidas.jpg",
      memberName: "Aditi Das",
      memberDesignation: "Decoration Co-Head",
      memberSocial: {
        linkedin: "",
        twitter: "",
        insta: "https://www.instagram.com/dasaditi22/",
        facebook:
          "https://www.facebook.com/profile.php?id=100059796821713&mibextid=ZbWKwL",
      },
    },
    
    
  ];
  const members = [
    {
      memberName: "Biswadeep Mondal",
      memberDesignation: "Member"
    },
    {
      memberName: "Rajdeep Saha",
      memberDesignation: "Member"
    },
    {
      memberName: "Aayush Bhardwaj",
      memberDesignation: "Member"
    },
    {
      memberName: "Karan Agarwal",
      memberDesignation: "Member"
    },
    {
      memberName: "Ekarsi Lodh",
      memberDesignation: "Member"
    },
    {
      memberName: "Subhojyoti Mukherjee",
      memberDesignation: "Member"
    },
    {
      memberName: "Rishikesh Mondal",
      memberDesignation: "Member"
    },
    {
      memberName: "Nirlipta Chattopadhyay",
      memberDesignation: "Member"
    },
    {
      memberName: "Raunak Raj",
      memberDesignation: "Member"
    },
    {
      memberName: "Soumyata Sarkar",
      memberDesignation: "Member"
    },
    {
      memberName: "Sreejita Mukhopadhyay ",
      memberDesignation: "Member"
    },
    {
      memberName: "Aaquib Ahmad",
      memberDesignation: "Member"
    },
    {
      memberName: "Pritam",
      memberDesignation: "Member"
    },
    {
      memberName: "Priyanshu",
      memberDesignation: "Member"
    },
    {
      memberName: "Raj De Modak",
      memberDesignation: "Member"
    },
    {
      memberName: "Subhadeep Roy",
      memberDesignation: "Member"
    },
    {
      memberName: "Aaquib Ahmad",
      memberDesignation: "Member"
    },
    {
      memberName: "Karan Agarwal ",
      memberDesignation: "Member"
    },
    {
      memberName: "Rishab Kumar Yadav",
      memberDesignation: "Member"
    },
    {
      memberName: "Anurag",
      memberDesignation: "Member"
    },
    {
      memberName: "Rishikesh Mondal",
      memberDesignation: "Member"
    },
    {
      memberName: "Stuti Singh",
      memberDesignation: "Member"
    },
    {
      memberName: "Sucheta Sarkar",
      memberDesignation: "Member"
    },
    {
      memberName: "Samyak Mishra",
      memberDesignation: "Member"
    },
    {
      memberName: "Shrutika Jha",
      memberDesignation: "Member"
    },
    {
      memberName: "Asmita Halder",
      memberDesignation: "Member"
    },
    {
      memberName: "Manali Sardar",
      memberDesignation: "Member"
    },
    {
      memberName: "Sujal Barnawal",
      memberDesignation: "Member"
    },
    {
      memberName: "Prinan Sil",
      memberDesignation: "Member"
    },
    {
      memberName: "Pritam",
      memberDesignation: "Member"
    },
    {
      memberName: "Abhimanyu Kanjilal",
      memberDesignation: "Member"
    },
    {
      memberName: "Indranil Sahu",
      memberDesignation: "Member"
    },
    
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading2
          title="Core Team"
          subtitle="Our Awesome Team Members"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.slice(0, itemShow).map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Div className="text-center">
          {teamData.length <= itemShow ? (
            ''
          ) : (
            <>
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>More Core Team Members</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>


      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading2
          title="Our Committee Members"
          subtitle="Meet the other hands that made this event possible"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {members.slice(0, itemShow).map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team2
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation="Member"
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Div className="text-center">
          {members.length <= itemShow ? (
            ''
          ) : (
            <>
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>More Committee Members</span>
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
