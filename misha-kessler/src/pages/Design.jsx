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
import Designs from '../assets/project-assets/Designs'

class Design extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Designs",
      tagline: "",
      description: "",
      helper: "Portfolio under construction. Check back soon!",
      projects: Designs,
    }
  }

  render() {
    return (
      <div className="page design-page">
        <Header />
        <Hero
          className="design-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body design-body">
          <div className="index design-index">
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
                        {project.category}
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
                        <Card.Header>{project.name}</Card.Header>
                        <Card.Meta>
                          <p>From <span className='pseudo-link smooth'>{project.meta}</span></p>
                          <p><span className='pseudo-link smooth'>{project.date}</span></p>
                        </Card.Meta>
                        <Card.Description>
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
                      </Card.Content>
                    </Card>
                    {project.url_to_demo &&
                      <Button
                        attached='bottom'
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

export default withRouter(Design)