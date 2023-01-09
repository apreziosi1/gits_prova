import * as React from "react";
import Layout from 'layouts/Clean';
import { SEO } from 'components';
import { MoviePage } from "../components/body";

const SecondPage = () => (
  <Layout location={location}>
    <SEO 
      title="Ghost in the Shell: Il film"
      location={location} />
    <MoviePage />
  </Layout>
)

export default SecondPage
