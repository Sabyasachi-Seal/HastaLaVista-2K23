import React from 'react'
import { Icon } from '@iconify/react';
import './testimonial.scss'
import Div from '../Div';

export default function Testimonial({testimonialText, avatarName, avatarDesignation, ratings}) {
  return (
    <Div className="cs-testimonial cs-style1">
      <Div className="cs-testimonial_quote">
        <Icon icon="fa:quote-left" />               
      </Div>
      <Div className="cs-testimonial_text">{testimonialText}</Div>
      <h2 className="cs-testimonial_avatar_name">{avatarName}</h2>
      <Div className="cs-testimonial_avatar_designation text-uppercase college">{avatarDesignation}</Div>
    </Div>
  )
}
