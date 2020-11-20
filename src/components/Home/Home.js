import React, { Component } from 'react'
import { homeContent } from '../../data/content/content'

export default class Home extends Component {
  render() {
    return (
      <div className="content-container d-flex justify-content-center align-items-center">
        <div className="home-container bg-light d-flex justify-content-center align-items-center p-4">
          <h1>{homeContent}</h1>
        </div>
      </div>
    )
  }
}
