import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import Select from 'react-select'
import { projectContent, projectFilter } from '../../data/content/content'

function displayProject(project) {
  return (
    <>
      <ProjectItem
        key = {project.id}
        id = {project.id}
        thumbnail = {project.thumbnail}
        img = {project.img}
        name = {project.name}
        desc = {project.desc}
        links = {project.links}
        codes = {project.codes}
        date = {project.date}
      />
    </>
  )
}

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedProject: [],
      selectedFilter: ""
    }
  }

  componentDidMount() {
    this.setFliter();
    this.sortProjectsByFilter();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.selectedFilter === prevState.selectedFilter) {
      return;
    }

    this.sortProjectsByFilter();
  }

  setFliter() {
    this.setState({
      selectedFilter: projectFilter[0].filterContent
    });
  }

  handleFliterChange(selectedOption) {
    this.setState({
      selectedFilter: selectedOption.value
    })
  }

  sortProjectsByFilter() {
    var sort = projectContent.sort((a,b) => {
      return new Date(b.date).getTime() -
        new Date(a.date).getTime()
    })

    if (this.state.selectedFilter == "2") {
      sort.reverse();
    }

    this.setState({
      sortedProject: sort
    });
  }

  render() {
    const {sortedProject} = this.state;
    const options = projectFilter.map((filter) => {
      return {
        label: filter.filterName,
        value: filter.filterContent
      }
    });

    return (
      <div className="content-container d-flex justify-content-center align-items-start overflow-auto">
        <div className="inner-container d-flex justify-content-around align-items-center flex-wrap">
          <div className="container-head">
            <h3 className="align-self-start p-3">Projects</h3>
            <div className="project-select">
              <Select
                defaultValue={{ label: projectFilter[0].filterName }}
                options={options}
                onChange={this.handleFliterChange.bind(this)}
              />
            </div>
          </div>
          {sortedProject.map(displayProject)}
        </div>
      </div>
    )
  }
}
