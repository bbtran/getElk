import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavbarListItem from '../components/NavbarListItem';
import { NavbarBrand } from '../components/NavbarBrand';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    console.log(e);
    this.setState({
      hidden: !this.state.hidden,
    });
  }
  render() {
    console.log('pageContent:', this.props.pageContent);
    return (
      <div className="navigation-container">
        <div className="main-nav">
          <nav className="navbar">
            <div className="navbar-header">
              <NavbarBrand logo={this.props.pageContent.nav.logo} />
              <div className={this.state.hidden ? 'navbar-list' : 'navbar-list visible'}>
                <ul>
                  {this.props.pageContent.nav.items.map((item) => <NavbarListItem key={item.action} title={item.title} />)}
                </ul>
              </div>
              <button className="toggle" onClick={this.handleToggle}>☰</button>
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
