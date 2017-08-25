import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavigationBar = styled.nav`
  display: inline-block;
  margin: 0 0 0 30px;
  padding: 0;

  > ul {
    display: inline-block;
    margin: 0;
    padding: 0;

    > li {
      display: inline-block;
      margin: 0 30px 0 0;
      list-style: none;
    }
  }
`

class TopNav extends Component {
  render() {
    return (
      <StyledNavigationBar>
          <ul>
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/competences">Compétences</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
      </StyledNavigationBar>
    );
  }
}

export default TopNav