import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectItem extends Component {
  render() {
    return (
      <div className="project-card p-3">
        <div className="card">
          <Link key={this.props.id} to={"/Project/" + this.props.id} className="img-wrap">
            <img src={this.props.thumbnail.src} className="card-img image" alt=""/> 
          </Link>
          <div className="card-body border-top text-center">
            <h5 className="card-title">{this.props.name}</h5>
            <div className="card-text">
              {
                this.props.codes.map((code, i) =>
                  <span key={i}>{code}{i < this.props.codes.length-1 ? ', ' : ''}</span>
                )
              }
            </div>
            <p className="card-text">
              {`Made on: ${this.props.date.getFullYear()}-${this.props.date.getMonth()+1}-${this.props.date.getDate()}`}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
