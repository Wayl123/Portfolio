import React, { Component } from 'react'
import {projectContent} from '../../data/content/content'

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      thumbnail: "",
      img: [],
      name: "",
      desc: "",
      links: [],
      codes: []
    };
  }

  componentDidMount() {
    this.getProject();
  }

  getProject() {
    const selectId = this.props.match.params.id;

    const project = projectContent.find(proj => proj.id == selectId);

    this.setState({
      id: project.id,
      thumbnail: project.thumbnail,
      img: project.img,
      name: project.name,
      desc: project.desc,
      links: project.links,
      codes: project.codes
    })
  }
  
  render() {
    const {thumbnail, img, name, desc, links, codes} = this.state

    return (
      <div>
        <p>{name}</p>
      </div>
    )
  }
}
