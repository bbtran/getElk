import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeatureItem extends Component {
  render() {
    return (
      <li className="feature-item">
        <div>
          <h4>{this.props.title}</h4>
          <p>
            {this.props.description}
          </p>
        </div>
      </li>
    );
  }
}

FeatureItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
