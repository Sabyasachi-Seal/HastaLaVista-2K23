import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/partner1.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner2.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner3.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner4.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner5.png', 
      alt:'Partner'
    }
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
