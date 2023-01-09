import * as React from "react"
import { Link } from "gatsby"

import Layout from 'layouts/Clean';
import { SEO, Header } from 'components';

const SecondPage = () => (
  <Layout location={location}>
    <SEO 
      title="Ghost in the Shell: Il film"
      location={location} />
  </Layout>
)

export default SecondPage
