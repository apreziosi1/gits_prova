// import { IndexPage } from 'components';
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Layout from 'layouts/Clean';
import { SEO, Header } from 'components';
import { HomeCover } from '../components/body';

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <SEO
          keywords={['Ghost in the Shell']}
          title="Ghost in the Shell"
          titleTemplate="%s"
          description="Homepage di Ghost in the Shell"
          location={location}
        />
        <HomeCover />
      </Layout>
    </>
  );
};
export default IndexPage;
