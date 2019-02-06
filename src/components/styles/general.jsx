import React from 'react';
import { Link as GLink } from 'gatsby';
import styled from 'styled-components';

export const Container = ({ children, ...args }) => (
  <div className="container" {...args}>
    {children}
  </div>
);

export const Link = styled(GLink)`
  color: var(--yeti-color-blue);
  &:hover {
    color: var(--yeti-color-blue);
  }
`;

export const Section = ({ children, ...args }) => (
  <section className="section" {...args}>
    {children}
  </section>
);
