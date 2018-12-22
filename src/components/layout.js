import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import '../all.sass';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            url
            image
            themeColor
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content={data.site.siteMetadata.themeColor} />

          <meta property="og:type" content={data.site.siteMetadata.type} />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content={data.site.siteMetadata.url} />
          <meta property="og:image" content={data.site.siteMetadata.image} />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </div>
    )}
  />
);

export default TemplateWrapper;
