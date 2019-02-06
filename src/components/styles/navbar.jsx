import React from 'react';
import styled from 'styled-components';
import { Link as YLink } from './general';

const Nav = styled.nav`
  &.navbar {
    position: sticky;
    top: 0;
    background-color: #24292e;
    color: var(--yeti-color-white);
  }
`;

const Link = styled(YLink)`
  &.navbar-item {
    color: var(--yeti-color-white);
    text-transform: uppercase;
    font-size: 14px;
    &:hover {
      color: var(--yeti-color-blue);
      background-color: var(--yeti-color-gray);
    }
  }
`;
const Navbar = ({ children }) => (
  <Nav className="navbar" role="navigation" aria-label="main-navigation">
    {children}
  </Nav>
);

Navbar.Link = ({ children, ...args }) => (
  <Link className="navbar-item" {...args}>
    {children}
  </Link>
);

export { Navbar };
