import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { GET_PAGE_CONTENT, GET_TESTIMONIALS } from '../actions/index';

function pageContentReducer(state = {}, action) {
  switch (action.type) {
    case GET_PAGE_CONTENT:
    return JSON.parse(action.payload) || state;
    default:
    return state;
  }
}

function testimonialsReducer(state = {}, action) {
  switch (action.type) {
    case GET_TESTIMONIALS:
    return JSON.parse(action.payload) || state;
    default:
    return state;
  }
}

const rootReducer = combineReducers({
  pageContent: pageContentReducer,
  testimonialList: testimonialsReducer,
  router: routerReducer,
});

export default rootReducer;
