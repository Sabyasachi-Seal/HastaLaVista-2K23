import React from 'react'
import { Icon } from '@iconify/react';
import './team.scss'
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function Team({memberImage, memberName, memberDesignation, memberSocial}) {
  return (
    <Div className="cs-team cs-style1">
        <Div className="cs-member_thumb">
          <img src={memberImage} alt={memberName} />
          <Div className="cs-member_overlay" />
        </Div>
        <Div className="cs-member_info">
          <Div className="outer">
          <h2 className="cs-member_name"><Link to="/team">{memberName}</Link></h2>
          <Div className="cs-member_designation">{memberDesignation}</Div>
          </Div>
        </Div>
        <Div className="cs-member_social cs-primary_color">
          {memberSocial.linkedin && (
            <a href={memberSocial.linkedin}>
              <Icon icon="fa6-brands:linkedin-in" />                   
            </a>
          )}
          {memberSocial.twitter && (
            <a href={memberSocial.twitter}>
              <Icon icon="fa-brands:twitter" />                                        
            </a>
          )}
          {memberSocial.insta && (
            <a href={memberSocial.insta}>
              <Icon icon="fa-brands:instagram" />                     
            </a>
          )}
          {memberSocial.facebook && (
            <a href={memberSocial.facebook}>
              <Icon icon="fa-brands:facebook-f" />                    
            </a>
          )}
        </Div>
      </Div>
  )
}
