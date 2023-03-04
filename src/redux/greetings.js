const GREET = 'rails/react/greetings';
const URL = 'http://127.0.0.1:3000/root.json';
export const greetingMessage = (payload) => ({ type: GREET, payload });
const initialState = '';

export const fetchData = () => async (dispatch) => {
  const res = await fetch(URL);
  const data = await res.json();
  dispatch(greetingMessage(data.message));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GREET: return action.payload;
    default: return state;
  }
};
