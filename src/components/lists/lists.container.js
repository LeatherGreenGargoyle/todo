import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Lists from './lists'
import { actionTypes } from '../../reducers'

class ListsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newList: '',
    }
    this.handleListRemove = this.handleListRemove.bind(this)
    this.handleNewListInput = this.handleNewListInput.bind(this)
    this.handleSubmitNewList = this.handleSubmitNewList.bind(this)
  }

  handleListRemove(idx) {
    const selectedListId = this.props.lists[idx]._id
    this.props.deleteList(selectedListId, this.props.userId)
  }

  handleNewListInput(text) {
    this.setState({ newList: text })
  }

  handleSubmitNewList() {
    this.props.submitNewList(this.state.newList, this.props.userId)
  }

  render() {
    const { lists, selectList, toggleListModal } = this.props
    return (
      <Lists
        currentNewList={this.state.newList}
        handleListRemove={this.handleListRemove}
        handleNewListInput={this.handleNewListInput}
        handleSubmitNewList={this.handleSubmitNewList}
        lists={lists}
        selectList={selectList}
        toggleListModal={toggleListModal}
      />
    )
  }
}

ListsContainer.propTypes = {
  deleteList: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  selectList: PropTypes.func.isRequired,
  submitNewList: PropTypes.func.isRequired,
  toggleListModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
}

const submitNewList = (newList, userId) => {
  console.log(newList, userId)
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

const deleteList = (listId, userId) => {
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

const mapStateToProps = state => ({
  lists: state.lists,
  userId: state.userId,
})

const mapDispatchToProps = dispatch => ({
  submitNewList: (newList, userId) => dispatch(submitNewList(newList, userId)),
  selectList: listObj => dispatch({ type: actionTypes.SET_CURR_LIST, payload: listObj }),
  deleteList: (listId, userId) => dispatch(deleteList(listId, userId)),
  toggleListModal: () => dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer)
