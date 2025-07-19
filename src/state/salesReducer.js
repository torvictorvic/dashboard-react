export const initialState = { selectedCountry: 'All' };
export function salesReducer(state, action) {
  switch (action.type) {
    case 'SET_COUNTRY':
      return { ...state, selectedCountry: action.payload };
    default:
      return state;
  }
}
