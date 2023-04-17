import React from 'react'
import './team.scss'
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function Team2({memberImage, memberName, memberDesignation, memberSocial}) {
  return (
    <Div className="cs-team cs-style1">
        <Div className="cs-member_thumb">
          <Div className="outer">
          <h2 className="cs-member_name"><Link to="/team">{memberName}</Link></h2>
          <Div className="cs-member_designation">{memberDesignation}</Div>
          </Div>
        </Div>
        <Div className="cs-member_info">
          
        </Div>
      </Div>
  )
}
