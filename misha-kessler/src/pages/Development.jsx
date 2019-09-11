// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// React Semantic
import {
  Label,
  Grid,
  Card,
  Icon,
  Image,
  Button,
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

// Assets 
import Websites from '../assets/project-assets/Websites'

class Development extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Websites",
      tagline: "",
      description: "",
      helper: "Each project card features multiple icons to help you preview the project's scope. Feel free to check out the icon key beneath the card gallery, if you're unsure of what some icons imply.",
      projects: Websites,
    }
  }

  render() {
    return (
      <div className="page development-page">
        <Header />
        <Hero
          className="development-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body development-body">
          <div className="index development-index">
            <Grid stackable centered >
              {this.state.projects.map(project =>
                <div key={project.id} className="project-cards">
                  <Grid.Column>
                    <Card
                      attached
                      link
                      color='teal'
                      className="dcursor smooth"
                    >
                      <Label
                        as='a'
                        color='teal'
                        ribbon='right'
                        className="dcursor smooth">
                        {project.date}
                      </Label>
                      {project.featured &&
                        <Image
                          src={project.url_to_img}
                          label={{
                            corner: 'left',
                            icon: 'star'
                          }}
                          wrapped ui={true}
                          className="overlay"
                        />}
                      {!project.featured &&
                        <Image
                          src={project.url_to_img}
                          wrapped ui={true}
                          className="overlay"
                        />}
                      <Card.Content>
                        <Card.Header
                          className="card-header">
                          {project.name}
                        </Card.Header>
                        <Card.Meta
                          className="card-meta">
                          <Icon
                            name='tags'
                            className="pseudo-link smooth" />
                          <p><span className='pseudo-link smooth'>{project.category}</span>via <span className='pseudo-link smooth'>{project.meta}</span></p>
                        </Card.Meta>
                        <Card.Description
                          className="card-description">
                          {project.tagline}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <p>At a glance:</p>
                        {project.wordpress &&
                          <span>
                            <Icon
                              size='large'
                              name='wordpress'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.html &&
                          <span>
                            <Icon
                              size='large'
                              name='html5'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.css &&
                          <span>
                            <Icon
                              size='large'
                              name='css3'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.php &&
                          <span>
                            <Icon
                              size='large'
                              name='php'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.javascript &&
                          <span>
                            <Icon
                              size='large'
                              name='js square'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.expressjs &&
                          <span>
                            <Icon
                              size='large'
                              name=''
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.reactjs &&
                          <span>
                            <Icon
                              size='large'
                              name='react'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.mysql &&
                          <span>
                            <Icon
                              size='large'
                              name='server'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.postgresql &&
                          <span>
                            <Icon
                              size='large'
                              name='server'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.ruby &&
                          <span>
                            <Icon
                              size='large'
                              name='gem'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.rails &&
                          <span>
                            <Icon
                              size='large'
                              name='subway'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.auth &&
                          <span>
                            <Icon
                              size='large'
                              name='key'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.responsive &&
                          <span>
                            <Icon
                              size='large'
                              name='mobile alt'
                              className="pseudo-link smooth" />
                          </span>
                        }
                        {project.accessible &&
                          <span>
                            <Icon
                              size='large'
                              name='universal access'
                              className="pseudo-link smooth" />
                          </span>
                        }
                      </Card.Content>
                    </Card>
                    <Button.Group attached='bottom'>
                      {project.url_to_casestudy &&
                        <Button
                          as='a'
                          href={project.url_to_casestudy}
                          color='teal'
                          className='smooth'
                          icon={{
                            name: 'search',
                            size: 'large',
                            className: 'ui-button-icon',
                          }}
                        />}
                      {project.url_to_demo &&
                        <Button
                          as='a'
                          href={project.url_to_demo}
                          target='_blank'
                          color='teal'
                          className='smooth'
                          icon={{
                            name: 'globe',
                            size: 'large',
                            className: 'ui-button-icon',
                          }}
                        />}
                      {project.url_to_github &&
                        <Button
                          as='a'
                          href={project.url_to_github}
                          target='_blank'
                          color='teal'
                          className='smooth'
                          icon={{
                            name: 'github',
                            size: 'large',
                            className: 'ui-button-icon',
                          }}
                        />}
                    </Button.Group>
                  </Grid.Column>
                </div>
              )}
            </Grid >
          </div>
          <div className='key-modal'>
            <Key />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Development)