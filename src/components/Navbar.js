import React from 'react';

import { Navbar as NB } from './styles/navbar';
import { Container } from './styles/general';

class Navbar extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <NB>
        <Container>
          <NB.Link to="/">YETI Labs</NB.Link>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <NB.Link to="/articles">Articles</NB.Link>
              <NB.Link to="/products">Products</NB.Link>
              <NB.Link to="/contact">Contact</NB.Link>
              <NB.Link to="/about">About</NB.Link>
            </div>
          </div>
        </Container>
      </NB>
    );
  }
}

export default Navbar;
