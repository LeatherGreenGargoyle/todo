import { combineReducers } from 'redux'
import nav from './navigation/nav.duck'

export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_USER_ID: 'SET_USER_ID',
  SET_LISTS: 'SET_LISTS',
  TOGGLE_SIGNUP: 'TOGGLE_SIGNUP',
}

const ui = (state = {
  signupModal: false,
}, { type, payload }) => {
  switch (type) {
    case actionTypes.TOGGLE_SIGNUP:
      return { ...state, signupModal: !state.signupModal}
  
    default:
      return state
  }
}

const username = (state = { username: '' }, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, username: payload }

    default:
      return state
  }
}

const lists = (state = { lists: [] }, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LISTS:
      return { ...state, lists: payload }

    default:
      return state
  }
}

const userId = (state = { userId: '' }, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER_ID:
      return { ...state, userId: payload }

    default:
      return state
  }
}

export default combineReducers({ nav, username, userId, lists, ui })
