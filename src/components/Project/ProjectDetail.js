import React, { Component } from 'react'
import { projectContent } from '../../data/content/content'

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      thumbnail: "",
      images: [],
      name: "",
      desc: "",
      links: [],
      codes: [],
      date: new Date()
    };
  }

  componentDidMount() {
    this.getProject();
  }

  getProject() {
    const selectId = this.props.match.params.id;

    const project = projectContent.find(proj => proj.id === selectId);

    this.setState({
      id: project.id,
      thumbnail: project.thumbnail,
      images: project.images,
      name: project.name,
      desc: project.desc,
      links: project.links,
      codes: project.codes,
      date: project.date
    })
  }
  
  render() {
    const {thumbnail, images, name, desc, links, codes, date} = this.state;

    return (
      <div className="content-container d-flex justify-content-center align-items-start overflow-auto">
        <div className="inner-container">
          <div id="carouselIndicators" className="carousel slide" data-interval="false" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={"../" + thumbnail.src} alt=""/>
                <div className="carousel-caption d-none d-md-block">
                  <p>{thumbnail.caption}</p>
                </div>
              </div>
              {images.map((image) => 
                <div className="carousel-item">
                  <img src={"../" + image.src} alt=""/>
                  <div className="carousel-caption d-none d-md-block">
                    <p>{image.caption}</p>
                  </div>
                </div>
              )}
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="proj">
            <h3 className="proj-head">{name}</h3>
            <div className="proj-desc">{desc}</div>
            <h5 className="proj-head">Last Updated Date</h5>
            <p>{`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}</p>
            <h5 className="proj-head">External Links</h5>
            {links.map((link) =>
              <p className="proj-link">{link.name + ": "}<a href={link.link}>Link</a></p>
            )}
            <h5 className="proj-head">Language/Dependency</h5>
            {codes.map((code) =>
              <p>{code}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
