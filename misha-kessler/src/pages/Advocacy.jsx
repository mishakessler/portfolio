// React
import React, { Component } from 'react'

// React Router
import {
  Link,
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
import Advocacies from '../assets/project-assets/Advocacies'

class Advocacy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Featured Advocacy",
      tagline: "",
      description: "Portfolio under construction. Check back soon!",
      helper: "",
      projects: Advocacies,
    }
  }

  render() {
    return (
      <div className="page advocacy-page">
        <Header />
        <Hero
          className="advocacy-hero"
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body advocacy-body">
          <div className="index advocacy-index">
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
                        {project.category}
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
                          <a>From</a>
                          <a>
                            {project.meta},
                          </a>
                          <a>
                            {project.date}
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          {project.tagline}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    {project.url_to_demo &&
                      <Button
                        attached='bottom'
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

export default withRouter(Advocacy)

