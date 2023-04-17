import React from 'react'
import Div from '../Div'

export default function Newsletter({title, subtitle, placeholder}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form action="https://formsubmit.co/d0f90321c9e8a4917f7087f29a43d620" className="cs-newsletter_form" method='POST'>

          <input type="hidden" name="_next" value={window.location.href}></input>
          <input type="hidden" name="_subject" value="[HLV-Website] Newsletter Subscription"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_autoresponse" value="You are now Subscibed to Updates from Hasta La Vista"></input>
          <input type="text" name="_honey" hidden></input>

          <input type="email" name="email" className="cs-newsletter_input" placeholder={placeholder} required/>
          <button className="cs-newsletter_btn"><span>Send</span></button>
          
        </form>
        <Div className="cs-newsletter_text">{subtitle}</Div>
      </Div>
    </>
  )
}
