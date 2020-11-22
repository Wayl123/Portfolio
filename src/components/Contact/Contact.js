import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="content-container d-flex justify-content-center align-items-start overflow-auto">
        <div className="inner-container">
          <h3 className="container-head p-3">Contact Me</h3>
          <form className="contact-form">
            <label> 
              Name*<br/>
              <input type="text" placeholder="Enter your name" id="name" required/>
            </label><br/>
            <label>
              Email*<br/>
              <input type="email" placeholder="Enter your email here" id="email" required/><br/>
            </label><br/>
            <label>
              Company Name<br/>
              <input type="text" placeholder="Enter company name (if applicable)" id="comp"/><br/>
            </label><br/>
            <label>
              Message<br/>
              <textarea placeholder="Enter your message" id="msg" required/><br/>
            </label><br/>
            <p>* = required section</p>
            <button type="submit"><img src="images/email_icon.png"/></button>
          </form>
        </div>
      </div>
    )
  }
}
