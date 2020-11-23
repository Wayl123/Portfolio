import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectItem extends Component {
  render() {
    return (
      <div className="project-card p-3">
        <div className="card">
          <Link key={this.props.id} to={"/Project/" + this.props.id} className="img-wrap">
            <img src={this.props.thumbnail} className="card-img image"/> 
          </Link>
          <div className="card-body border-top text-center">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              {this.props.codes.slice(0,3).map((code) =>
                `${code}`
              ) + "..."}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
