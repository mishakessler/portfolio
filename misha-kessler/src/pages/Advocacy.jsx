// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// React Semantic
import {
  Menu,
} from 'semantic-ui-react'

// Components
import Header from './Header'
import Hero from './Hero'
import Key from '../components/modules/Key'
import Footer from './Footer'

import AdvocacyIndex from '../components/modules/AdvocacyIndex'

// Assets 
import {
  Awards,
  Committees,
  Documentaries,
  Interviews,
  Memberships,
  Panels,
  Publications,
  Speeches,
} from '../assets/project-assets/AdvocacyProjects'

class Advocacy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Thought Leadership",
      tagline: "",
      postimage: null,
      description: "The following cards feature each of the panels, speakerships, media interviews, research publications, reports, news articles, and documentaries in which I've been honored to be included.",
      helper: null,

      activeItem: 'panels',

      awards: Awards,
      committees: Committees,
      documentaries: Documentaries,
      interviews: Interviews,
      memberships: Memberships,
      panels: Panels,
      publications: Publications,
      speeches: Speeches,
    }
  }

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    })

  menuRender = (activeItem) => {
    switch (activeItem) {
      case 'panels':
        return <AdvocacyIndex
          projects={this.state.panels} />
      case 'speeches':
        return <AdvocacyIndex
          projects={this.state.speeches} />
      case 'interviews':
        return <AdvocacyIndex
          projects={this.state.interviews} />
      case 'documentaries':
        return <AdvocacyIndex
          projects={this.state.documentaries} />
      case 'publications':
        return <AdvocacyIndex
          projects={this.state.publications} />
      case 'committees':
        return <AdvocacyIndex
          projects={this.state.committees} />
      case 'memberships':
        return <AdvocacyIndex
          projects={this.state.memberships} />
      case 'awards':
        return <AdvocacyIndex
          projects={this.state.awards} />
      default:
        return <AdvocacyIndex
          projects={this.state.panels} />
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="page advocacy-page">
        <Header />
        <Hero
          className="advocacy-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body advocacy-body">
          <div className="submenu advocacy-submenu">
            <Menu
              inverted
              secondary
              stackable
              fluid
              pointing
              widths={8}>
              <Menu.Item
                name='panels'
                active={activeItem === 'panels'}
                onClick={this.handleItemClick} />
              <Menu.Item
                name='speeches'
                active={activeItem === 'speeches'}
                onClick={this.handleItemClick} />
              <Menu.Item
                name='interviews'
                active={activeItem === 'interviews'}
                onClick={this.handleItemClick} />
              <Menu.Item
                name='documentaries'
                active={activeItem === 'documentaries'}
                onClick={this.handleItemClick} />
              <Menu.Item
                name='publications'
                active={activeItem === 'publications'}
                onClick={this.handleItemClick} />
              <Menu.Item
                name='committees'
                active={activeItem === 'committees'}
                onClick={this.handleItemClick} />
              <Menu.Item
                name='memberships'
                active={activeItem === 'memberships'}
                onClick={this.handleItemClick} />
              <Menu.Item
                name='awards'
                active={activeItem === 'awards'}
                onClick={this.handleItemClick} />
            </Menu>
          </div>
          <div className="index advocacy-index">
            {this.menuRender(activeItem)}
          </div>
        </div>
        <div className='key-modal'>
          <Key />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Advocacy)

