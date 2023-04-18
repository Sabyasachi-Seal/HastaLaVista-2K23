import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  {/* <img src="/images/csefarewellB.png" alt="Logo" /> */}
                  <img src="/images/CSEFarewellBlack.svg" alt="Logo" className="image" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="menu-item">
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Welcome
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </NavLink>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <NavLink to="/team" onClick={() => setMobileToggle(false)}>
                        Team
                      </NavLink>
                    </li> */}
                    <li className="menu-item-has-children">
                      <Link to="/" onClick={() => setMobileToggle(false)}>
                        Team
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/team" onClick={() => setMobileToggle(false)}>
                            Students
                            </Link>
                          </li>
                          <li>
                            <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                            Teachers
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/gallery" onClick={() => setMobileToggle(false)}>
                        Gallery
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <a href="https://lu.ma/event/evt-xNs3p4DfZd56WHG" target="_blank" rel="noreferrer">Register</a>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/" onClick={() => setMobileToggle(false)}>
                        Other Events
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <a href="https://cseunited.com/" onClick={() => setMobileToggle(false)}>
                              CSE United
                            </a>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item">
                      <Link to="/contact" onClick={() => setMobileToggle(false)}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/csefarewellB.png" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Wanna collaborate with us on some project? <br /> Connect with us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
