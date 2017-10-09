// ACTION TYPES
export const SET_TEST_ACTION = 'test/SET_TEST_ACTION';

const initialState = {
  testData: {},
  reduxText: 'Welcome!',
};

// REDUCER
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TEST_ACTION: {
      const { testData } = action;

      return {
        ...state,
        testData,
      };
    }

    default: return state;
  }
}

// ACTION CREATORS
export function doTestAction(token) {
  return {
    type: SET_TEST_ACTION,
    token,
  };
}
