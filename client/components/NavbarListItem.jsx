import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class NavbarListItem extends Component {
  render() {
    const url = this.props.title.toLowerCase().replace(/[\d\W\s]/g, '-');
    return (
      <li>
        <Link className="nav-link" to={url} target="_blank">
          <div className="background">
            {this.props.title}
          </div>
        </Link>
      </li>
    );
  }
}

NavbarListItem.propTypes = {
  title: PropTypes.string,
};
