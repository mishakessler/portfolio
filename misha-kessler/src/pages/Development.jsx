// React
import React, { Component } from 'react'

// React Router
import {
  Link,
  withRouter
} from 'react-router-dom'

// React Semantic
import {
  Header,
  Label,
  Grid,
  Card,
  Icon,
  Image,
  Button,
  Modal
} from 'semantic-ui-react'

// Components
import Hero from '../components/modules/Hero'

// Pages

// Assets 
import Websites from '../assets/projects/Projects'

class Development extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: Websites,
    }
  }

  render() {
    return (
      <div className="page development-page">
        <Hero />
        <div className="index project-index">
          <Grid stackable centered columns={2}>
            {this.state.projects.map(project =>
              <div key={project.id} className="project-cards">
                <Grid.Column>
                  <Card
                    color='teal'
                    className='smooth'
                  >
                    {project.type &&
                      <Label
                        as='a'
                        color='teal'
                        ribbon='right'>
                        {project.category} {project.type}
                      </Label>
                    }
                    <Image src={project.url_to_img} className="overlay" wrapped ui={true} />
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
                            name='html5' />
                          {project.html}
                        </a>
                      }
                      {project.css &&
                        <a>
                          <Icon
                            size='big'
                            name='css' />
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