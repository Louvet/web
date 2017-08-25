import React, { Component } from 'react'
import { RouteTransition } from 'react-router-transition'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import { injectGlobal, ThemeProvider } from 'styled-components'

import HomePage from './containers/HomePage'
import CompetencesPage from './containers/CompetencesPage'
import ContactPage from './containers/ContactPage'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="%s - Vincent Louvet">
          <title>Développeur Web à Toulouse</title>
          <meta name="description" content="Développeur Web Front et Back End à Toulouse" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Router>
            <Route render={({ location }) => (
              <RouteTransition style={{position: 'absolute'}} className="wrapper"
                pathname={location.pathname}
                atEnter={{ translateX: 100 }}
                atLeave={{ translateX: 0 }}
                atActive={{ translateX: 0 }}
                mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
              >
                <Switch key={location.key} location={location}>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/competences" component={CompetencesPage}/>
                  <Route path="/contact" component={ContactPage}/>
                </Switch>  
              </RouteTransition>
            )}/>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;