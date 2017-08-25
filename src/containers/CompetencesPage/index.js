import React, { Component } from 'react'
import Helmet from 'react-helmet'

import PageTemplate from '../../components/PageTemplate'

class CompetencesPage extends Component {
  render() {
    return (
      <PageTemplate>  
        <Helmet>
          <title>Compétences en développement pour le Web</title>
          <meta name="description" content="Développeur Front End (JavaScript: React, Angular, Vue...) et Back End (PHP: Zend Framework, Synfony...)"/>
        </Helmet>
        <h1>Compétences</h1>  
      </PageTemplate>
    );
  }
}

export default CompetencesPage
