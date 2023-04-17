import { Icon } from "@iconify/react";
import React from "react";
import Slider from "react-slick";
import Div from "../Div";
import Team from "../Team";

export default function TeamSlider() {
  /** Team Member Data **/
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

    // {
    //   memberImage: "/images/profilepics/prinansil.jpg",
    //   memberName: "Melon Bulgery",
    //   memberDesignation: "Product Designer",
    //   memberSocial: {
    //     linkedin: "https://www.linkedin.com/in/prinan-sil-587811206/",
    //     twitter: "https://twitter.com/PrinanS",
    //     insta: "https://www.instagram.com/lone_wolf_2002/",
    //     facebook: "https://www.facebook.com/profile.php?id=100090921676885",
    //   },
    // },
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
    {
      memberImage: "",
      memberName: "",
      memberDesignation: "",
      memberSocial: {
        linkedin: "",
        twitter: "",
        insta: "",
        facebook:
          "",
      },
    }
  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
