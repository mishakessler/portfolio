// React
import React from 'react'

// React Semantic
import {
  Label,
  Grid,
  Card,
  Image,
  Button,
} from 'semantic-ui-react'

export default function AdvocacyIndex(props) {
  return (
    <>
      <Grid stackable centered >
        {props.projects.map(project =>
          <div key={project.id} className="project-cards">
            <Grid.Column>
              <Card
                attached
                color='teal'
                className='dcursor smooth'
              >
                <Label
                  as='a'
                  color='teal'
                  ribbon='right'
                  className='dcursor smooth'>
                  {project.category}
                </Label>
                {project.featured &&
                  <Image
                    src={project.url_to_img}
                    alt=''
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
                    alt=''
                    wrapped ui={true}
                    className="overlay"
                  />}
                <Card.Content>
                  <Card.Header>{project.name}</Card.Header>
                  <Card.Meta>
                    <p><span className='pseudo-link smooth'>{project.date}</span></p>
                  </Card.Meta>
                  <Card.Description>
                    <p><span className='pseudo-link smooth'>{project.meta}</span></p>
                    {project.tagline}
                  </Card.Description>
                </Card.Content>
              </Card>
              {project.url_to_demo &&
                <Button
                  attached='bottom'
                  as='a'
                  title='View Project Online'
                  href={project.url_to_demo}
                  target='_blank'
                  rel='noopener'
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
