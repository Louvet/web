import React, { Component } from 'react'

import Logo from './Logo'
import PrimaryNav from './PrimaryNav'

class Header extends Component {
  render() {
    return (
      <header>
          <Logo/>
          <PrimaryNav/>
      </header>
    );
  }
}

export default Header