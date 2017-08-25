import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'    
import Helmet from 'react-helmet'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Main = styled.main`
    font-family: ${font('primary')};
    color: #f00;
`

const AppWrapper = styled.div`
    position: relative;
`

const PageTemplate = ({ children }) => (
    <AppWrapper>
        <Helmet titleTemplate="%s - Vincent Louvet">
          <title>Développeur Web à Toulouse</title>
          <meta name="description" content="Développeur Web Front et Back End à Toulouse" />
        </Helmet>
        <Header/>   
        <Main>
          {children}
        </Main>
        <Footer/>
    </AppWrapper>
)

export default PageTemplate