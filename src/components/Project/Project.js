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
      <div className="content-container d-flex flex-column align-items-center overflow-auto">
        <h2>Projects</h2>
        <div className="project-container d-flex justify-content-around align-items-center flex-wrap">
          {projectContent.map(displayProject)}
        </div>
      </div>
    )
  }
}
