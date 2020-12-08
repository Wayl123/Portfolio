import React, { Component } from 'react'
import { aboutContent } from '../../data/content/content'

export default class About extends Component {
  render() {
    return (
      <div className="content-container about-bg d-flex justify-content-center align-items-center overflow-auto">
        <div className="inner-container">
          <div className="about">
            <h3 className="container-head p-3">About Me</h3>
            <p>{aboutContent.p1}</p>
            <p>{aboutContent.p2}</p>
            <h5>Programming language skill overview:</h5>
            <div className="skill-list overflow-auto">
              {aboutContent.skills}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
