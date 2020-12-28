import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ categories }) => (
  <header className="menu">
    <nav>
      {categories.map(({ label }) => (
        <a
          href="#"
          key={label}
          className="menu-link"
        >
          {label}
        </a>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
