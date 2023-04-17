import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Button({ btnLink, btnText, variant, icon }) {
  return (
    <a
      href={btnLink}
      className={variant ? `cs-text_btn ${variant}` : 'cs-text_btn'}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </a>
  );
}
