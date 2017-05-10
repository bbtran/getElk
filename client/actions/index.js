import axios from 'axios';
export const GET_PAGE_CONTENT = 'GET_PAGE_CONTENT';
export const GET_TESTIMONIALS = 'GET_TESTIMONIALS';

// Fetch all page content from server
export function getPageContent() {
  const url = '/api/page-content';
  const request = axios.get(url);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: GET_PAGE_CONTENT, payload: data });
    });
  };
}

// Fetch all testimonials from server
export function getTestimonials() {
  const url = '/api/testimonials';
  const request = axios.get(url);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: GET_TESTIMONIALS, payload: data });
    });
  };
}
