import { ip } from '../constants'

// action type constants
export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_USER_ID: 'SET_USER_ID',
  SET_LISTS: 'SET_LISTS',
  SET_CURR_LIST: 'SET_CURR_LIST',
  TOGGLE_SIGNUP: 'TOGGLE_SIGNUP',
  TOGGLE_LIST: 'TOGGLE_LIST',
  TO_LISTS: 'TO_LISTS',
}

// add a new list to the database, then update store with new list
export const submitNewList = (newList, userId) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ user: userId, title: newList, tasks: [] }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch(`http://${ip}:3000/lists`, fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
      })
      .catch(err => console.log(err))
  }
}

// delete list from database, then update store with new lists
export const deleteList = (listId, userId) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'DELETE',
      body: JSON.stringify({ userId, listId }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch(`http://${ip}:3000/lists`, fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
      })
      .catch(err => console.log(err))
  }
}

// update list in database, then update store with new list
export const editList = (listId, userId, tasks) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'PATCH',
      body: JSON.stringify({ listId, userId, tasks }),
      headers: { 'Content-Type': 'application/JSON' },
    }
    return fetch(`http://${ip}:3000/lists`, fetchInit)
      .then(() => fetch(`http://${ip}:3000/lists`, fetchInit))
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
        dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} })
      })
      .catch(err => console.log(err))
  }
}

// create a new user in database, then set current user and lists, and close signup modal
export const createUser = (username, password) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch(`http://${ip}:3000/newUsers`, fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_USER, payload: userObj.userName })
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
        dispatch({ type: actionTypes.SET_USER_ID, payload: userObj._id })
        dispatch({ type: actionTypes.TOGGLE_SIGNUP, payload: {} })
      })
      .catch(err => console.log(err))
  }
}

// authenticate user, then retrieve lists and update store
export const getLists = (username, password) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch(`http://${ip}:3000/users`, fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_USER, payload: userObj.userName })
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
        dispatch({ type: actionTypes.SET_USER_ID, payload: userObj._id })
        dispatch({ type: actionTypes.TO_LISTS, payload: {} })
      })
      .catch(err => console.log(err))
  }
}

// select a list to be displayed in the 'list' modal
export const selectCurrentList = listObj => (
  { type: actionTypes.SET_CURR_LIST, payload: listObj }
)

export const toggleListModal = () => ({ type: actionTypes.TOGGLE_LIST, payload: {} })

export const toggleSignupModal = () => ({ type: actionTypes.TOGGLE_SIGNUP, payload: {} })
