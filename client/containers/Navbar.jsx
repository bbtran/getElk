import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavbarListItem from '../components/NavbarListItem';
import { NavbarBrand } from '../components/NavbarBrand';

class Navbar extends Component {
  render() {
    console.log('pageContent:', this.props.pageContent);
    return (
      <div className="navigation-container">
        <div className="main-nav">
          <nav className="navbar">
            <div className="navbar-header">
              <NavbarBrand logo={this.props.pageContent.nav.logo} />
            </div>
            <div className="navbar-list">
              <ul>
                {this.props.pageContent.nav.items.reverse().map((item) => <NavbarListItem key={item.action} title={item.title} />)}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ pageContent }) {
  return { pageContent };
}

Navbar.propTypes = {
  pageContent: PropTypes.object,
};

export default connect(mapStateToProps)(Navbar);
