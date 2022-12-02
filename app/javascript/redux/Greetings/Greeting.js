const FETCH_DATA = 'FETCH_DATA';

const initialState = {
  greetings: {},
};

export const getData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const fetchApi = () => (dispatch) => {
  fetch('http://127.0.0.1:5000/api/v1/greetings').then((response) => response.json()).then((data) => {
    dispatch(getData(data));
  });
};

export default function greetReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_DATA:
      return { ...state, greetings: payload };

    default:
      return state;
  }
}
