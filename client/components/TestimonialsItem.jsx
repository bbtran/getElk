import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TestimonialsItem extends Component {
  render() {
    return (
      <li className="testimonial-item">
        <div className="testimonial-header">
          <div className="avatar">
            <img src={this.props.avatar} alt="avatar" />
          </div>
          <div className="info">
            <div className="user-name">
              {this.props.firstName + ' ' + this.props.lastName}
            </div>
            <div className="company">{this.props.company}</div>
          </div>
        </div>
        <div className="testimonial-text">
          {'"' + this.props.testimony + '"'}
        </div>
      </li>
    );
  }
}

TestimonialsItem.propTypes = {
  company: PropTypes.string,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  testimony: PropTypes.string,
};
