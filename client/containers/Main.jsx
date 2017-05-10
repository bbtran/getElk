import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

class Main extends Component {
  render() {
    const { pageContent } = this.props;
    return (
      <div className="main-app">
        <Navbar />
        <br />
        {pageContent.home.sections[0].data.text}
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
