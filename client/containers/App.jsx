import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from './Main';
import * as actions from '../actions';
import '../../styles/base.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  // Called right after the initial rendering but before componentWillReceiveProps
  componentDidMount() {
    this.props.getPageContent();
    this.props.getTestimonials();
  }

  // Called after initial render. Once props are received, the component is re-rendered
  componentWillReceiveProps(nextProps) {
    if (nextProps.pageContent.app.name) {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    // If props have not been received, then show Loading otherwise render the contents.
    return this.state.loading ? <div className="loading"> Loading... </div> : <Main />;
  }
}

function mapStateToProps({ pageContent }) {
  return { pageContent };
}

App.propTypes = {
  getPageContent: PropTypes.func,
  getTestimonials: PropTypes.func,
  pageContent: PropTypes.object,
};

export default connect(mapStateToProps, actions)(App);
