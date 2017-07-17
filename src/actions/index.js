export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_USER_ID: 'SET_USER_ID',
  SET_LISTS: 'SET_LISTS',
  SET_CURR_LIST: 'SET_CURR_LIST',
  TOGGLE_SIGNUP: 'TOGGLE_SIGNUP',
  TOGGLE_LIST: 'TOGGLE_LIST',
}

export const submitNewList = (newList, userId) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ user: userId, title: newList, tasks: [] }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch('http://10.0.0.105:3000/lists', fetchInit)
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

    return fetch('http://10.0.0.105:3000/lists', fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
      })
      .catch(err => console.log(err))
  }
}

export const selectCurrentList = listObj => (
  { type: actionTypes.SET_CURR_LIST, payload: listObj }
)

export const toggleListModal = () => ({ type: actionTypes.TOGGLE_LIST, payload: {} })
