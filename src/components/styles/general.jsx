import React from 'react';
import { Link as GLink } from 'gatsby';
import styled from 'styled-components';

export const Container = ({ children }) => <div className="container"> {children}</div>;

export const Link = styled(GLink)`
  &:hover {
    color: var(--yeti-color-hover);
  }
`;
