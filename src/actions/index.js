export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_USER_ID: 'SET_USER_ID',
  SET_LISTS: 'SET_LISTS',
  SET_CURR_LIST: 'SET_CURR_LIST',
  TOGGLE_SIGNUP: 'TOGGLE_SIGNUP',
  TOGGLE_LIST: 'TOGGLE_LIST',
}
// action type constants

export const submitNewList = (newList, userId) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ user: userId, title: newList, tasks: [] }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch('http://192.168.1.66:3000/lists', fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
      })
      .catch(err => console.log(err))
  }
}

export const deleteList = (listId, userId) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'DELETE',
      body: JSON.stringify({ userId, listId }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch('http://192.168.1.66:3000/lists', fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
      })
      .catch(err => console.log(err))
  }
}

export const editList = (listId, userId, tasks) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'PATCH',
      body: JSON.stringify({ listId, userId, tasks }),
      headers: { 'Content-Type': 'application/JSON' },
    }
    return fetch('http://192.168.1.66:3000/lists', fetchInit)
      .then(() => fetch('http://192.168.1.66:3000/lists', fetchInit))
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
        dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} })
      })
      .catch(err => console.log(err))
  }
}

export const getLists = (username, password) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch('http://192.168.1.66:3000/users', fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_USER, payload: userObj.userName })
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
        dispatch({ type: actionTypes.SET_USER_ID, payload: userObj._id })
      })
      .catch(err => console.log(err))
  }
}

export const selectCurrentList = listObj => (
  { type: actionTypes.SET_CURR_LIST, payload: listObj }
)

export const toggleListModal = () => ({ type: actionTypes.TOGGLE_LIST, payload: {} })
