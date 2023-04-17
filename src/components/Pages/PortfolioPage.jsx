import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio4 from '../Portfolio/Portfolio4';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function PortfolioPage() {
  pageTitle('Gallery');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const pics = [
    {
      src: '/images/portfolio(4).jpg',
      category: 'logo_design',
    },
    {
      // src: '/images/portfolio_4.jpeg',
      src: '/images/portfolio(5).jpg',
      category: 'ui_ux_design',
    },
    {
      src: '/images/portfolio(14).jpg',
      category: 'web_design',
    },
    {
      src: '/images/portfolio(15).jpg',
      category: 'mobile_apps',
    },
    {
      src: '/images/portfolio(6).jpg',
      category: 'ui_ux_design',
    },
    {
      src: '/images/portfolio(26).jpg',
      category: 'web_design',
    },
    {
      src: '/images/portfolio(23).jpg',
      category: 'mobile_apps',
    },
    {
      src: '/images/portfolio(21).jpg',
      category: 'web_design',
    },
    {
      src: '/images/portfolio(28).jpg',
      category: 'mobile_apps',
    },
    {
      src: '/images/portfolio(22).jpg',
      category: 'ui_ux_design',
    },
    {
      src: '/images/portfolio(29).jpg',
      category: 'logo_design',
    },
    // nb 
    {
      src: '/images/portfolio(25)1.jpg',
      category: 'ui_ux_design',
    },
    {
      src: '/images/portfolio(10).jpg',
      category: 'logo_design',
    },
    {
      src: '/images/portfolio(3).jpg',
      category: 'web_design',
    },
    {
      src: '/images/portfolio(30).jpg',
      category: 'mobile_apps',
    },
    {
      src: '/images/portfolio(16).jpg',
      category: 'ui_ux_design',
    },
    {
      src: '/images/portfolio(7).jpg',
      category: 'logo_design',
    },
    {
      src: '/images/portfolio(33).jpg',
      category: 'ui_ux_design',
    },
    {
      src: '/images/portfolio(32).jpg',
      category: 'ui_ux_design',
    },
  ];
  const categoryMenu = [
    {
      title: 'Teachers',
      category: 'web_design',
    },
    {
      title: 'Students',
      category: 'ui_ux_design',
    },
    {
      title: 'Couples',
      category: 'mobile_apps',
    },
    {
      title: 'Random',
      category: 'logo_design',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Gallery"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Gallery"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Here are some glimpses" subtitle="Hasta La Vista Gallery" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {pics.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio4
                title=""
                subtitle=""
                // href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {pics.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Wanna see more ?</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="hastalavista.cse.tmsl@gmail.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
