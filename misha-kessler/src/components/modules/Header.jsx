// React
import React from 'react'

// React Router
import {
  Link
} from 'react-router-dom'

// React Semantic
import {
  Button,
  Icon
} from 'semantic-ui-react'

// Assets
import Lettermark from '../../assets/graphics/lettermark.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuDiv: false,
      menuButton: true,
    }
  }

  showMenu = () => {
    this.setState({
      menuDiv: true,
      menuButton: false,
    })
  }

  hideMenu = () => {
    this.setState({
      menuDiv: false,
      menuButton: true,
    })
  }

  render() {
    return (
      <div className="page-header">
        <div className="header-logo">
          <Link to="/"><img src={Lettermark}></img></Link>
        </div>
        <div className="desktop-nav hide-on-mobile">
          <Link to="/development" className="smooth">Development</Link>
          <Link to="/design" className="smooth">Design</Link>
          <Link to="/entrepreneurship" className="smooth">Entrepreneurship</Link>
          <Link to="/advocacy" className="smooth">Advocacy</Link>
          <Link to="/about" className="smooth">About</Link>
          <Link to="/contact" className="menu-cta smooth">Contact</Link>
        </div>
        <div className="mobile-nav hide-on-desktop">
          {!this.state.menuDiv &&
            <Button
              icon
              cyan
              massive
              inverted
              onClick={this.showMenu}
              className="hamburger-icon">
              <Icon name="bars" />
            </Button>
          }
          {this.state.menuDiv &&
            <div className="mobile-menu">
              <Button
                icon
                cyan
                massive
                inverted
                onClick={this.hideMenu}
                className="hamburger-icon" >
                <Icon name="ellipsis vertical" />
              </Button>
              <Link to="/development" className="smooth">Development</Link>
              <Link to="/design" className="smooth">Design</Link>
              <Link to="/entrepreneurship" className="smooth">Entrepreneurship</Link>
              <Link to="/advocacy" className="smooth">Advocacy</Link>
              <Link to="/about" className="smooth">About</Link>
              <Link to="/contact" className="menu-cta smooth">Contact</Link>
            </div>
          }
        </div>
      </div>
    )
  }
}

