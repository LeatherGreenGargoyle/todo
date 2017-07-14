export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_LISTS: 'SET_LISTS',
}

const initialState = {
  currentUser: '',
  currentLists: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, currentUser: action.payload }
      break

    case actionTypes.SET_USER:
      return { ...state, currentUser: action.payload }
      break
  
    default:
      break;
  }
}

// sets currentUser state
// sets lists state
