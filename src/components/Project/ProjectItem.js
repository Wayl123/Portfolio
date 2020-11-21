import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectItem extends Component {
  render() {
    return (
      <div className="project-card p-3">
        <div className="card">
          <Link to="/Project" className="img-wrap">
            <img src={this.props.img} className="card-img-top image"/> 
          </Link>
          <div className="card-body border-top text-center">
            <h5 className="card-title">{this.props.name}</h5>
          </div>
        </div>
      </div>
    )
  }
}
