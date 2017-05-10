import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class NavbarListItem extends Component {
  render() {
    return (
      <li>
        <Link className="nav-link" to="/">{this.props.title}</Link>
      </li>
    );
  }
}

NavbarListItem.propTypes = {
  title: PropTypes.string,
};
