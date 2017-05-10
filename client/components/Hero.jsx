import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hero extends Component {
  render() {
    return (
      <section className="hero-bar">
        <div className="container">
          <div className="col-left">
            {this.props.title}
          </div>
          <div className="col-right">
            {this.props.text}
            <button type="submit">
              {this.props.buttonOne}
            </button>
            <button type="submit">
              {this.props.buttonTwo}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonOne: PropTypes.string,
  buttonTwo: PropTypes.string,
}
