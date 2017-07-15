import { combineReducers } from 'redux'
import nav from './navigation/nav.duck'

export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_USER_ID: 'SET_USER_ID',
  SET_LISTS: 'SET_LISTS',
  SET_CURR_LIST: 'SET_CURR_LIST',
  TOGGLE_SIGNUP: 'TOGGLE_SIGNUP',
  TOGGLE_LIST: 'TOGGLE_LIST',
}

const ui = (state = {
  signupModal: false,
}, { type }) => {
  switch (type) {
    case actionTypes.TOGGLE_SIGNUP:
      return { ...state, signupModal: !state.signupModal }

    case actionTypes.TOGGLE_LIST:
      return { ...state, listModal: !state.listModal }

    default:
      return state
  }
}

const username = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return payload

    default:
      return state
  }
}

const initialLists = [
  {
    title: 'Login to view lists!',
    tasks: [
      {
        body: 'Login to view lists!',
        completed: false,
        _id: 0,
      },
    ],
  },
]

const lists = (state = initialLists, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LISTS:
      return payload

    default:
      return state
  }
}


const initialList = {
  title: '',
  tasks: [],
}

const currentList = (state = initialList, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CURR_LIST:
      return payload

    default:
      return state
  }
}

const userId = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER_ID:
      return payload

    default:
      return state
  }
}

export default combineReducers({ nav, username, userId, lists, ui, currentList })
