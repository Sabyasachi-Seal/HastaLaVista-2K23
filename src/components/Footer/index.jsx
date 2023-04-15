import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'
import Spacing from '../Spacing';

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      href: '/'
    },
    {
      title: 'Privacy Policy',
      href: '/'
    }
  ]
  
  const quickLinks = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About Us',
      href: '/about'
    },
    {
      title: 'Out Team',
      href: '/team'
    },
    {
      title: 'Contact US',
      href: '/contact'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="seal1">
            <Div className="seal">
              <Div className="col-lg-3 col-sm-9 foot">
                <Div className="cs-footer_item image">
                  <TextWidget
                    // logoSrc='/images/csefarewellB.png' 
                    logoSrc='/images/CSEFarewellBlack.svg' 
                    logoAlt='Logo'
                    // text ='Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.'
                  />
                </Div>
              </Div>
              <Div className="col-lg-2 col-sm-6 foot">
                <Div className="cs-footer_item subs">
                  <MenuWidget menuItems={quickLinks} menuHeading='Quick Links'/>
                </Div>
              </Div>
              <Div className="col-lg-3 col-sm-6 foot">
                <Div className="cs-footer_item subs">
                  <ContactInfoWidget title='Contact Us'/>
                  <Spacing lg="35" md="25" />
                  <SocialWidget/>
                </Div>
              </Div>
              <Div className="col-lg-4 col-sm-6 foot">
                <Div className="cs-footer_item subs">
                  <Newsletter 
                    title='Subscribe' 
                    subtitle='At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.' 
                    placeholder='example@gmail.com'
                  />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023 Tech Team @ Hasta-La-Vista.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
