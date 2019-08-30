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
  Modal
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Footer from '../components/modules/Footer'

// Assets 
import Websites from '../assets/projects/Projects'

class Development extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      tagline: "",
      description: "I'm a dedicated and agile developer and entrepreneur with over seven years of experience finding creative solutions to pressing issues in the mental and behavioral health space. Results-driven, attentive, and built on a growth mindset, I'm constantly challenging myself to master new technical skills and design high-quality resources that improve the consumer experience.",
      helper: null,

      projects: Websites,
    }
  }

  render() {
    return (
      <div className="page development-page">

        <Hero
          className="development-hero"
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="index project-index">
          <Grid stackable centered columns={2}>
            {this.state.projects.map(project =>
              <div key={project.id} className="project-cards">
                <Grid.Column>
                  <Card
                    href={`/projects/${project.id}`}
                    color='teal'
                    className='smooth'
                  >
                    {project.post_type &&
                      <Label
                        as='a'
                        color='teal'
                        ribbon='right'
                        className="smooth">
                        {project.post_type}
                      </Label>
                    }
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
                        <a>
                          <Icon name='map marker alternate' />
                          {project.meta}
                        </a>
                      </Card.Meta>
                      <Card.Description>
                        {project.tagline}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <p>At a glance:</p>
                      {project.html &&
                        <a>
                          <Icon
                            size='big'
                            name='html5'
                            className="smooth" />
                          {project.html}
                        </a>
                      }
                      {project.css &&
                        <a>
                          <Icon
                            size='big'
                            name='css'
                            className="smooth" />
                          {project.css}
                        </a>
                      }
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </div>
            )}
          </Grid >
        </div>
      </div>
    )
  }
}


export default withRouter(Development)