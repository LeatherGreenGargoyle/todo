import { combineReducers } from 'redux'
import nav from './navigation/nav.duck'

const actionTypes = {
  SET_USER: 'SET_USER',
  SET_LISTS: 'SET_LISTS',
}

const initialStates = {
  username: '',
  lists: [],
}

const username = (state = initialStates.currentUser, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, currentUser: action.payload }

    default:
      return state
  }
}

const lists = (state = initialStates.lists, action) => {
  switch (action.type) {
    case actionTypes.SET_LISTS:
      return { ...state, lists: action.payload }

    default:
      return state
  }
}

export default combineReducers({ nav })
