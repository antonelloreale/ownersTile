export const HOME_INIT = 'home/HOME_INIT';

export function homeInit(label) {
  return {
    type: HOME_INIT,
    label,
  };
}

const initialState = {
  label: 'Hello there!',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_INIT:
      return {
        ...state,
        label: action.label,
      };
    default:
      return state;
  }
};
