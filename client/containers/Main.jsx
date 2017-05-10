import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import Hero from '../components/Hero';
import Features from '../components/Features';
class Main extends Component {
  render() {
    const { pageContent } = this.props;
    return (
      <div className="main-app">
        <Navbar />
        <Hero
          {...pageContent.home.sections[0].data}
          buttonOne={pageContent.home.sections[0].data.buttons[0].title}
          buttonTwo={pageContent.home.sections[0].data.buttons[1].title}
        />
        <Features
          {...pageContent.home.sections[2].data}
        />
        <Testimonials />
      </div>
    );
  }
}

function mapStateToProps({ pageContent }) {
  return { pageContent };
}

Main.propTypes = {
  pageContent: PropTypes.object,
};
export default connect(mapStateToProps)(Main);
