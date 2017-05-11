import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hero extends Component {
  render() {
    return (
      <section className="hero-bar">
        <div className="container">
          <div className="col-left">
            <h2>{this.props.title}</h2>
          </div>
          <div className="col-right">
            <p>{this.props.text}</p>
            <div className="buttons">
              <button type="submit" className="buttonOne">
                {this.props.buttonOne}
              </button>
              <button type="submit" className="buttonTwo">
                {this.props.buttonTwo}
              </button>
            </div>
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
};
