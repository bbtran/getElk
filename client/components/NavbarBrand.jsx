import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavbarBrand = (props) => {
  return <Link to="/"><img src={props.logo} alt="logo" /></Link>;
};

NavbarBrand.propTypes = {
  logo: PropTypes.string,
};
