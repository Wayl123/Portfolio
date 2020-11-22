import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import {projectContent} from '../../data/content/content'

function displayProject(project) {
  return <ProjectItem
    key = {project.id}
    img = {project.img}
    name = {project.name}
  />
}

export default class Project extends Component {

  render() {
    return (
      <div className="content-container d-flex justify-content-center align-items-start overflow-auto">
        <div className="inner-container d-flex justify-content-around align-items-center flex-wrap">
          <h3 className="container-head align-self-start p-3">Projects</h3>
          {projectContent.map(displayProject)}
        </div>
      </div>
    )
  }
}
