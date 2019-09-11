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
                      className='smooth'
                    >
                      <Label
                        as='a'
                        color='teal'
                        ribbon='right'
                        className="smooth">
                        {project.date}
                      </Label>
                      {project.featured &&
                        <Image
                          src={project.url_to_img}
                          label={{
                            as: 'a',
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
                            className="smooth" />
                          <a>
                            {project.category}
                          </a>
                          <p>via </p>
                          <a>
                            {project.meta}
                          </a>
                        </Card.Meta>
                        <Card.Description
                          className="card-description">
                          {project.tagline}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <p>At a glance:</p>
                        {project.wordpress &&
                          <a>
                            <Icon
                              size='large'
                              name='wordpress'
                              className="smooth" />
                          </a>
                        }
                        {project.html &&
                          <a>
                            <Icon
                              size='large'
                              name='html5'
                              className="smooth" />
                          </a>
                        }
                        {project.css &&
                          <a>
                            <Icon
                              size='large'
                              name='css3'
                              className="smooth" />
                          </a>
                        }
                        {project.php &&
                          <a>
                            <Icon
                              size='large'
                              name='php'
                              className="smooth" />
                          </a>
                        }
                        {project.javascript &&
                          <a>
                            <Icon
                              size='large'
                              name='js square'
                              className="smooth" />
                          </a>
                        }
                        {project.expressjs &&
                          <a>
                            <Icon
                              size='large'
                              name=''
                              className="smooth" />
                          </a>
                        }
                        {project.reactjs &&
                          <a>
                            <Icon
                              size='large'
                              name='react'
                              className="smooth" />
                          </a>
                        }
                        {project.mysql &&
                          <a>
                            <Icon
                              size='large'
                              name='server'
                              className="smooth" />
                          </a>
                        }
                        {project.postgresql &&
                          <a>
                            <Icon
                              size='large'
                              name='server'
                              className="smooth" />
                          </a>
                        }
                        {project.ruby &&
                          <a>
                            <Icon
                              size='large'
                              name='gem'
                              className="smooth" />
                          </a>
                        }
                        {project.rails &&
                          <a>
                            <Icon
                              size='large'
                              name='subway'
                              className="smooth" />
                          </a>
                        }
                        {project.auth &&
                          <a>
                            <Icon
                              size='large'
                              name='key'
                              className="smooth" />
                          </a>
                        }
                        {project.responsive &&
                          <a>
                            <Icon
                              size='large'
                              name='mobile alt'
                              className="smooth" />
                          </a>
                        }
                        {project.accessible &&
                          <a>
                            <Icon
                              size='large'
                              name='universal access'
                              className="smooth" />
                          </a>
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