import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TestimonialsItem from '../components/TestimonialsItem';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: this.props.testimonialList,
    };
  }
  render() {
    if (this.state.testimonials) {
      console.log(this.state.testimonials);
      return (
        <section className="testimonials">
          <div className="container">
            <h3>{this.state.testimonials.testimonials_header}</h3>
            <ul>
              {this.state.testimonials.testimonials.map((item) => <TestimonialsItem key={item.id} company={item.company} firstName={item.first_name} lastName={item.last_name} avatar={item.photo_url} testimony={item.testimony} />)}
            </ul>
          </div>
        </section>
      );
    }
    return <div> </div>;
  }
}

function mapStateToProps({ testimonialList }) {
  return { testimonialList };
}

Testimonials.propTypes = {
  testimonialList: PropTypes.object,
};

export default connect(mapStateToProps)(Testimonials);
