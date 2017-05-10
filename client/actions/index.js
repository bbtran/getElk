import axios from 'axios';
export const GET_PAGE_CONTENT = 'GET_PAGE_CONTENT';

export function getPageContent() {
  const url = '/api/page-content';
  const request = axios.get(url);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: GET_PAGE_CONTENT, payload: data });
    });
  };
}
