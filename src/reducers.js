import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import Navigator from './navigation/nav'
import { actionTypes } from './actions'
import { initialList, initialLists } from './constants'

const ui = (state = {
  signupModal: false,
  listModal: false,
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

const lists = (state = initialLists, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LISTS:
      return payload

    default:
      return state
  }
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

const initNavState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }))
const nav = (state = initNavState, action) => {
  switch (action.type) {
    case actionTypes.TO_LISTS:
      return Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Lists' }),
        state)

    default:
      return Navigator.router.getStateForAction(action, state)
  }
}

export default combineReducers({ nav, username, userId, lists, ui, currentList })
