import React from 'react';
import styled from 'styled-components';
import { Link as YLink } from './general';

const Nav = styled.nav`
  background-color: #24292e;
  color: var(--color-white);
  min-height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Link = styled(YLink)`
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
    background-color: transparent;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 20px 0;
  background-color: #24292e;
  color: var(--color-white);
`;

const Navbar = ({ children }) => (
  <Nav role="navigation" aria-label="main-navigation">
    {children}
  </Nav>
);
Navbar.Sticky = ({ children, ...args }) => <Sticky {...args}>{children} </Sticky>;
Navbar.Link = ({ children, ...args }) => <Link {...args}>{children}</Link>;

export { Navbar };
