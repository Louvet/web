import React, { Component } from 'react'
import Helmet from 'react-helmet'

import PageTemplate from '../../components/PageTemplate'

class ContactPage extends Component {
  render() {
    return (
      <PageTemplate>  
        <Helmet>
          <title>Contacter un développeur Web Full-Stack toulousain</title>
          <meta name="description" content="Vous avez une question ? Besoin d'un conseil ou unde demande de devis ? Envoyez moi un message !"/>
        </Helmet>
        <h1>Contact</h1>  
      </PageTemplate>
    );
  }
}

export default ContactPage