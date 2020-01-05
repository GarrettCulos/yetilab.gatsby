import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Section, Container } from '../components/styles/general';
import { ProjectPreviewTemplate } from '../templates/project-page';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;
    console.log(projects);
    return (
      <Layout>
        <Section>
          <Container>
            {projects.map(({ node: project }) => (
              <>
                <ProjectPreviewTemplate
                  key={project.id}
                  link={project.frontmatter.link}
                  project={project.frontmatter.project}
                  date={project.frontmatter.date}
                  tags={project.frontmatter.tags}
                  description={project.excerpt}
                  team={project.frontmatter.team}
                  organization={project.frontmatter.organization}
                  endDate={project.frontmatter.endDate}
                  projectColor={project.frontmatter.projectColor}
                  logoUrl={project.frontmatter.icon}
                />
                {/* <Content className="content" key={project.id}>
                  <p>
                    <Link to={project.fields.slug}>{project.frontmatter.project}</Link>
                    <span> &bull; </span>
                    <small>{project.frontmatter.date}</small>
                  </p>
                  <p>
                    {project.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={project.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </Content> */}
              </>
            ))}
          </Container>
        </Section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            project
            date(formatString: "DD.MM.YY")
            endDate(formatString: "DD.MM.YY")
            icon
            link
            team
            projectColor
            organization
            mission
            tags
          }
        }
      }
    }
  }
`;
