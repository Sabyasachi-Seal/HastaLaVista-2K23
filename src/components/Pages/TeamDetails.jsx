import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'

export default function TeamDetails() {
  pageTitle('Teachers');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Teachers'
        bgSrc='/images/team_hero_bg.jpeg'
        pageLinkText='Teacher Co-Ordinator'
      />
      <Spacing lg='100' md='60'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6 teacher">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/profilepics/moutushibanerjee.jpg" alt="Member" className="w-100" />
              <h2 className="cs-section_title title section">Moutushi Banerjee</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle section">Teacher Co-Ordinator</h3>
            </Div>
          </Div>
          <Div className="col-xl-5 col-lg-6 teacher">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/profilepics/mkn.jpg" alt="Member" className="w-100" />
              <h2 className="cs-section_title title section">Mrinal Kanti Nath</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle section">Teacher Co-Ordinator</h3>
            </Div>
          </Div>
          {/* <Div className="col-lg-6 offset-xl-1">
            <Spacing lg='0' md='45'/>
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">Melon Bulgery</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Product Designer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
              <Div className="cs-height_45 cs-height_lg_30" />
              <SocialWidget/>
            </Div>
          </Div> */}
        </Div>
      </Div>
      <Spacing lg='100' md='60'/>
      <Div className="container">
        <Cta 
          title='Wanna be a part of Hasta La <br />Vista 2K23?' 
          btnText='Register for Event' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
