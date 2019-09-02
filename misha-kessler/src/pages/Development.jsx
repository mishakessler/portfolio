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
      image: 'https://imgur.com/',
      tagline: "",
      description: "",
      helper: `Each project card features multiple icons to help you preview the project's scope. Feel free to check out the icon key beneath the card gallery, if you're unsure of what some icons imply!`,
      projects: Websites,
    }
  }

  render() {
    return (
      <div className="page development-page">
        <Header />
        <Hero
          className="development-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body development-body">
          <div className="index development-index">
            <Grid stackable centered columns={2}>
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
                        <Card.Header>{project.name}</Card.Header>
                        <Card.Meta>
                          <Icon
                            name='tags'
                            className="smooth" />
                          <a>
                            {project.meta},
                          </a>
                          <a>
                            {project.category}
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          {project.tagline}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <p>At a glance:</p>
                        {project.wordpress &&
                          <a>
                            <Icon
                              size='big'
                              name='wordpress'
                              className="smooth" />
                          </a>
                        }
                        {project.html &&
                          <a>
                            <Icon
                              size='big'
                              name='html5'
                              className="smooth" />
                          </a>
                        }
                        {project.css &&
                          <a>
                            <Icon
                              size='big'
                              name='css3'
                              className="smooth" />
                          </a>
                        }
                        {project.php &&
                          <a>
                            <Icon
                              size='big'
                              name='php'
                              className="smooth" />
                          </a>
                        }
                        {project.javascript &&
                          <a>
                            <Icon
                              size='big'
                              name='js square'
                              className="smooth" />
                          </a>
                        }
                        {project.expressjs &&
                          <a>
                            <Icon
                              size='big'
                              name=''
                              className="smooth" />
                          </a>
                        }
                        {project.reactjs &&
                          <a>
                            <Icon
                              size='big'
                              name='react'
                              className="smooth" />
                          </a>
                        }
                        {project.mysql &&
                          <a>
                            <Icon
                              size='big'
                              name='server'
                              className="smooth" />
                          </a>
                        }
                        {project.postgresql &&
                          <a>
                            <Icon
                              size='big'
                              name='server'
                              className="smooth" />
                          </a>
                        }
                        {project.ruby &&
                          <a>
                            <Icon
                              size='big'
                              name='gem'
                              className="smooth" />
                          </a>
                        }
                        {project.rails &&
                          <a>
                            <Icon
                              size='big'
                              name='subway'
                              className="smooth" />
                          </a>
                        }
                        {project.responsive &&
                          <a>
                            <Icon
                              size='big'
                              name='mobile alt'
                              className="smooth" />
                          </a>
                        }
                        {project.accessible &&
                          <a>
                            <Icon
                              size='big'
                              name='universal access'
                              className="smooth" />
                          </a>
                        }
                      </Card.Content>
                    </Card>
                    <Button.Group attached='bottom'>
                      {project.url_to_casestudy &&
                        <Button
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