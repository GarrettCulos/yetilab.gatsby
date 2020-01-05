import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import Content from '../components/content';
import { Section, Container } from '../components/styles/general';

export const ProjectTemplate = ({ content, contentComponent, description, tags, project, helmet }) => {
  const projectContent = contentComponent || Content;

  return (
    <Section>
      {helmet || ''}
      <Container className="content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{project}</h1>
            <p>{description}</p>
            <projectContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
};

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  project: PropTypes.string,
  helmet: PropTypes.object
};

const PP = styled.div`
  padding: 24px;
  border: 1px solid transparent;
  border-radius: 4px;
  display: block;
  width: 100%;
  font-size: 14px;
  color: var(--font-color);
  margin-bottom: 56px;
  transition: var(--default-transition);
  &:hover {
    border: 1px solid var(--border-color);
  }
`;

PP.Title = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

PP.Dates = styled.div`
  justify-content: center;
  display: flex;
`;

PP.Date = styled.div`
  text-align: center;
  letter-spacing: 1px;
  font-kerning: none;
`;

PP.Tags = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  padding: 16px 0;
`;

PP.LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 54px;
  color: ${({ color }) => (color ? color : 'var(--color-gold)')};
`;
PP.Logo = styled.img`
  text-align: center;
  width: 50px;
`;

PP.Tag = styled(Link)`
  color: var(--font-color);
  margin-right: 16px;
  transition: var(--default-transition);
  &:hover {
    color: var(--font-color--hover);
  }
`;

PP.Description = styled.p`
  margin-top: 16px;
`;

export const ProjectPreviewTemplate = ({ project, link, date, endDate, projectColor, organization, team, description, tags, logoUrl }) => {
  return (
    <PP>
      <PP.LogoContainer color={projectColor}>
        {logoUrl ? (
          <PP.Logo src={logoUrl} alt={project} />
        ) : (
          <svg version="1.1" height="100%" width="100%" x="0px" y="0px" viewBox="0 0 58 58" style={{ enableBackground: 'new 0 0 58 58' }}>
            <g>
              <polygon style={{ fill: 'currentColor' }} points="29,58 3,45 3,13 29,26 " />
              <polygon style={{ fill: '#556080' }} points="29,58 55,45 55,13 29,26 " />
              <polygon style={{ fill: '#434C6D' }} points="3,13 28,0 55,13 29,26 " />
            </g>
          </svg>
        )}
      </PP.LogoContainer>
      <PP.Title>
        {project}
        {link && (
          <a target="_blank" href={link}>
            >
          </a>
        )}
      </PP.Title>
      <PP.Dates>
        <PP.Date>{date}</PP.Date>
        {endDate && (
          <>
            {'  -  '}
            <PP.Date>{endDate}</PP.Date>
          </>
        )}
      </PP.Dates>
      {tags && (
        <PP.Tags>
          {tags.map(tag => (
            <PP.Tag to={`/tags/${kebabCase(tag)}/`}>{tag} </PP.Tag>
          ))}
        </PP.Tags>
      )}
      <PP.Description>{description}</PP.Description>
    </PP>
  );
};

ProjectPreviewTemplate.propTypes = {
  project: PropTypes.any,
  link: PropTypes.any,
  date: PropTypes.any,
  endDate: PropTypes.any,
  projectColor: PropTypes.any,
  organization: PropTypes.any,
  team: PropTypes.any,
  description: PropTypes.any,
  tags: PropTypes.any,
  logoUrl: PropTypes.any
};

export default ProjectPreviewTemplate;
