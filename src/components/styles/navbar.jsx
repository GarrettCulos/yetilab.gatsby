import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = styled.nav`
  background-color: #24292e;
  color: var(--color-white);
`;
export const Navbar = ({ children }) => (
  <Nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    {children}
  </Nav>
);
