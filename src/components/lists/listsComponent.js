import React, { Component } from 'react'
import { Button, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import ListsUI from '../../ui/lists.ui'
import { actionTypes } from '../../reducers'

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
      newList: ''
    }
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
          toggleList={this.props.toggleList}
        />
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

    return fetch('http://10.0.0.162:3000/lists', fetchInit)
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
  toggleListModal: () => dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
