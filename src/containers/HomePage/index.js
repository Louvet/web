import React, { Component } from 'react'
import Helmet from 'react-helmet'

import PageTemplate from '../../components/PageTemplate'

class HomePage extends Component {
  render() {
    return (
      <PageTemplate>
        <Helmet>
          <title>coucou Développeur Web à Toulouse</title>
          <meta name="description" content="Développeur Web Front et Back End à Toulouse" />
        </Helmet>
        <h1>Accueil</h1>  
      </PageTemplate>
    );
  }
}

export default HomePage
