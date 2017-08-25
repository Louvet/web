import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logosvg from './logo.svg'

const StyledLogoLink = styled(Link)`
    display: inline-block;

    &.hidden {
        display: none;
    }

    > img {
        width: 80px;
    }
`

class Logo extends Component {

  render() {
    return (
      <StyledLogoLink to="/">
       <img src={logosvg} alt="Vincent Louvet, développeur Web Full-Stack à Toulouse"/>
      </StyledLogoLink>  
    );
  }
}

export default Logo