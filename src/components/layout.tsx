import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { light } from '../theme';
import './layout.css';

import Header from './header';
import Keywords from './Keywords';

const QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout: React.FunctionComponent = ({ children }) => {
  const data = useStaticQuery(QUERY);

  return (
    <ThemeProvider theme={light}>
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Keywords />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </footer>
        </div>
      </>
    </ThemeProvider>
  );
};

export default Layout;
