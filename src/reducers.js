import { combineReducers } from 'redux'
import nav from './navigation/nav.duck'

export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_USER_ID: 'SET_USER_ID',
  SET_LISTS: 'SET_LISTS',
}

const initialStates = {
  username: '',
  lists: [],
  userId: '',
}

const username = (state = { username: '' }, action) => {
  console.log('in reducer', action.payload)
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, username: action.payload }

    default:
      return state
  }
}

const lists = (state = { lists: [] }, action) => {
  switch (action.type) {
    case actionTypes.SET_LISTS:
      return { ...state, lists: action.payload }

    default:
      return state
  }
}

const userId = (state = { userId: '' }, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_ID:
      return { ...state, userId: action.payload }

    default:
      return state
  }
}

export default combineReducers({ nav, username, userId, lists })
