import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link} to={'/'}
          />
          <Menu.Item
            name='Clientes'
            active={activeItem === 'Clientes'}
            onClick={this.handleItemClick}
            as={Link} to={'/Clientes'}
          />
          <Menu.Item
            name='Solicitudes'
            active={activeItem === 'Solicitudes'}
            onClick={this.handleItemClick}
            as={Link} to={'/Solicitudes'}
          />
        </Menu>
      </Segment>
    )
  }
}