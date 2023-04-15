import React from 'react'
// import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      {/* <Link to='/' className="cs-center">
      </Link> */}
      <a href="https://www.facebook.com/HastaLaVista.cse.tmsl" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </a>
      {/* <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link> */}
      <a href="https://www.youtube.com/@HastaLaVista_cse" className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </a>
      {/* <Link to='/' className="cs-center">
      </Link> */}
      {/* <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </Link> */}
      <a href="https://www.instagram.com/hasta_la_vista.cse/" className="cs-center">            
        <Icon icon="fa6-brands:instagram" />
      </a>
      <a href="mailto:hastalavista.cse.tmsl@gmail.com" className="cs-center">            
        <Icon icon="ph:envelope-open-fill" />
      </a>
      {/* <Link to='/' className="cs-center">
      </Link> */}
    </Div>
  )
}
