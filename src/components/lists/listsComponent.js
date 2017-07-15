import React, { Component } from 'react'
import { Button, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import ListsUI from '../../ui/lists.ui'
import { actionTypes } from '../../reducers'
import ListModal from '../../ui/listModal'

const textInputStyles = {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
}

const listStyles = {
  flex: 1,
}

class Lists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newList: '',
    }
    this.handleListRemove = this.handleListRemove.bind(this)
  }

  handleListRemove(idx) {
    const selectedListId = this.props.lists[idx]._id
    this.props.deleteList(selectedListId, this.props.userId)
  }

  render() {
    return (
      <View style={listStyles}>
        <TextInput
          style={textInputStyles}
          onChangeText={newList => this.setState({ newList })}
          value={this.state.newList}
        />
        <Button
          title="Submit"
          onPress={() => this.props.submitNewList(this.state.newList, this.props.userId)}
        />
        <ListsUI
          lists={this.props.lists}
          selectList={this.props.selectList}
          toggleListModal={this.props.toggleListModal}
          handleListRemove={this.handleListRemove}
        />
        <ListModal />
      </View>
    )
  }
}

const submitNewList = (newList, userId) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
