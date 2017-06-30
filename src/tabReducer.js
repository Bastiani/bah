const INITIAL_STATE = { selected: '', tabVisible: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TAB_SELECTED':
      return { ...state, selected: action.payload };
    case 'TAB_SHOWED':
      return { ...state, tabVisible: action.payload };
    default:
      return state;
  }
};
