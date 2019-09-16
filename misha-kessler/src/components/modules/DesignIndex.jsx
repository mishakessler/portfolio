// React

import React from 'react'

// React Semantic
import {
  Label,
  Grid,
  Card,
  Icon,
  Image,
  Button,
} from 'semantic-ui-react'

export default function DesignIndex(props) {
  return (
    <>
      <Grid stackable centered >
        {props.projects.map(project =>
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
    </>
  )
}
