import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import FunFact from "../FunFact";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TeamSlider from "../Slider/TeamSlider";
import Spacing from "../Spacing";

export default function AboutPage() {
  pageTitle("About");

  const funfaceData = [
    {
      title: 'Students',
      factNumber: '600',
    },
    {
      title: 'Team Members',
      factNumber: '50',
    },
    {
      title: 'Departments',
      factNumber: '3',
    },
    {
      title: 'Event',
      factNumber: '1',
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="What are we reallly about?"
              subtitle="About Hasta La Vista"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Hasta La Vista is the grand farewell party organized by the
                students of the CSE, CSBS, and DCST departments of Techno Main
                Salt Lake to bid adieu to their esteemed seniors. It's a
                much-awaited event that marks the culmination of their time
                together as a close-knit community. With the theme "Hasta La
                Vista," which means "Until We Meet Again" in Spanish, the event
                promises to be a memorable one filled with laughter, tears, and
                fond memories.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <img
              src="/images/about4.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6">
            <img
              src="/images/about2.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="5" md="5" />
          </Div>
          <Div className="col-lg-6">
            <img
              src="/images/about1.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="About Team CSE"
          subtitle="Successfully organizing and running a college event requires a dedicated team. Behind the scenes, multiple teams work tirelessly to make sure everything runs smoothly. Our team CSE is no exception. It consists of the following teams.
          Technical Team, Graphics Team, Cultural Team, PR Team, Sponsorship Team, Finance Team, Decoration Team, Food Management Team, Field Service Team, Photography Team, Event Management Team. All teams come together and work hand in hand to make your event a success."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about3.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="See you again!"
              subtitle="It's been a long day, without you my friend"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                From electrifying performances to heartfelt speeches, here we
                will showcase the excitement, emotions, and anticipation that
                surround this event. It's time for the juniors to express their
                gratitude, admiration, and best wishes to the seniors as they
                embark upon a new chapter in their lives.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Hasta La Vista is not just a party; it's a celebration of the
                cherished bonds and everlasting friendships that have been
                formed and nurtured during their time at TMSL, and a tribute to
                the seniors who have left an indelible mark on their alma mater.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
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
      {/* End CTA Section */}
    </>
  );
}
