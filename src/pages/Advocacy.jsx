// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// React Semantic
import {
  Menu,
  Dropdown,
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

// Index
import AdvocacyIndex from '../components/indices/AdvocacyIndex'

// Case Study

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
} from '../data/AdvocacyProjects'

import Misha from '../assets/images/misha-advocacy.jpg'

const categories = [
  {
    key: 'panels',
    text: 'Panels',
    value: 'panels',
  }, {
    key: 'speeches',
    text: 'Speeches',
    value: 'speeches',
  }, {
    key: 'interviews',
    text: 'Interviews',
    value: 'interviews',
  }, {
    key: 'documentaries',
    text: 'Documentaries',
    value: 'documentaries',
  }, {
    key: 'publications',
    text: 'Publications',
    value: 'publications',
  }, {
    key: 'committees',
    text: 'Committees',
    value: 'committees',
  }, {
    key: 'memberships',
    text: 'Memberships',
    value: 'memberships',
  }, {
    key: 'awards',
    text: 'Awards',
    value: 'awards',
  },
]

class Advocacy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Thought Leadership",
      tagline: "From personal experience to professional expertise.",
      postimage: `${Misha}`,
      description: "My own experiences with depression and anxiety as a young adult became the foundation of my career, motivating, informing, and grounding my pursuits. I continue to serve in roles that aim to improve treatment and prevention outcomes; over the years, I've authored or coauthored a handful of policy and research publications; I'm routinely interviewed for news media and documentaries; I often speak at galas, conferences, and summits, including testifying to the United States Congress; and I serve in multiple advisory and policy roles.",
      helper: "The following cards feature each of the advocacies in which I've been honored to be included. Use the submenu to view the various categories.",

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

  handleSelect = (e, { value }) =>
    this.setState({
      activeItem: value,
    })

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    })

  menuRender = (activeItem) => {
    switch (activeItem) {
      case 'panels':
        return <AdvocacyIndex
          title='Panels'
          projects={this.state.panels} />
      case 'speeches':
        return <AdvocacyIndex
          title='Speeches'
          projects={this.state.speeches} />
      case 'interviews':
        return <AdvocacyIndex
          title='Interviews'
          projects={this.state.interviews} />
      case 'documentaries':
        return <AdvocacyIndex
          title='Documentaries'
          projects={this.state.documentaries} />
      case 'publications':
        return <AdvocacyIndex
          title='Publications'
          projects={this.state.publications} />
      case 'committees':
        return <AdvocacyIndex
          title='Committees'
          projects={this.state.committees} />
      case 'memberships':
        return <AdvocacyIndex
          title='Memberships'
          projects={this.state.memberships} />
      case 'awards':
        return <AdvocacyIndex
          title='Awards'
          projects={this.state.awards} />
      default:
        return <AdvocacyIndex
          title='Panels'
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
          <div className="submenu advocacy-submenu hide-on-desktop">
            <Dropdown
              selection
              clearable
              fluid
              name='activeItem'
              options={categories}
              onChange={this.handleSelect}
              placeholder='View Categories'
            />
          </div>
          <div className="submenu advocacy-submenu hide-on-mobile">
            <Menu
              inverted
              secondary
              stackable
              fluid
              pointing
              widths={8}
              className="hide-on-mobile">
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
        </div >
        <div className='key-modal'>
          <Key />
        </div>
        <Footer />
      </div >
    )
  }
}

export default withRouter(Advocacy)

