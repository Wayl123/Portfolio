import React, { Component } from 'react'
import {aboutContent} from '../../data/content/content'

export default class About extends Component {
  render() {
    return (
      <div className="content-container d-flex justify-content-around align-items-center overflow-auto">
        <div className="about-container">
          <h3>About Me</h3>
          <p>{aboutContent.p1}</p>
          <p>{aboutContent.p2}</p>
          <h5>Programming language skill overview:</h5>
          <div className="skill-list overflow-auto">
            {aboutContent.skills}
          </div>
        </div>
        <div className="about-image">
          Design goes here
        </div>
      </div>
    )
  }
}
