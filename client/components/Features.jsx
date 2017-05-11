import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeatureItem from './FeatureItem';

export default class Features extends Component {
   render() {
     return (
       <section className="features">
         <div className="container">
           <h2>{this.props.title}</h2>
           <ul>
             {this.props.items.map((item) => <FeatureItem key={item.title} title={item.title} description={item.description} />)}
           </ul>
         </div>
       </section>
     );
   }
}

Features.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
