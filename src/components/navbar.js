import React from 'react';

import { Navbar as NB } from './styles/navbar';
import { Container } from './styles/general';
import { YetiLogo } from './logo';

class Navbar extends React.Component {
  render() {
    return (
      <NB>
        <NB.Sticky>
          <Container>
            <NB.Link to="/">
              <YetiLogo />
            </NB.Link>
            {/* <div id="navMenu" className="navbar-menu">
              <div className="navbar-start has-text-centered">
                <NB.Link to="/articles">Articles</NB.Link>
                <NB.Link to="/products">Products</NB.Link>
                <NB.Link to="/contact">Contact</NB.Link>
                <NB.Link to="/about">About</NB.Link>
              </div>
            </div> */}
          </Container>
        </NB.Sticky>
      </NB>
    );
  }
}

export default Navbar;
