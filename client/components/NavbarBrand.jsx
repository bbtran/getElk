import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavbarBrand = (props) => {
  return <Link to="/"><img src={props.pageContent.nav.logo} alt="logo" /></Link>;
};

NavbarBrand.propTypes = {
  pageContent: PropTypes.object,
};
