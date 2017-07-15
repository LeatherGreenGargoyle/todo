import React, { Component } from 'react'
import { Button, Modal, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actionTypes } from '../reducers'

const textInputStyles = {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
}

class ListModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoBody: '',
      tasks: [],
    }
    this.handlePress.bind(this)
    this.handleClose.bind(this)
  }

  componentWillReceiveProps() {
    const newTasks = [...this.props.list.tasks]
    this.setState({ tasks: newTasks })
  }

  handlePress() {
    const newState = [...this.state.tasks]
    const newTask = {
      completed: false,
      body: this.state.todoBody,
    }
    newState.push(newTask)
    this.setState({ tasks: newState })
  }

  handleClose() {
    if (JSON.stringify(this.state.tasks) !== JSON.stringify(this.props.list.tasks)) {
      this.props.editList(this.props.list._id, this.props.userId, this.state.tasks)
    } else {
      this.props.toggleListModal()
    }
  }

  render() {
    return (
      <Modal
        style={{ flex: 1 }}
        animationType={'slide'}
        visible={this.props.visible}
        onRequestClose={this.props.toggleListModal}
      >
        <Text>Add a new task!</Text>
        <TextInput
          style={textInputStyles}
          onChangeText={todoBody => this.setState({ todoBody })}
          value={this.state.todoBody}
        />
        <Button
          title="Submit"
          onPress={() => this.handlePress()}
        />
        {this.state.tasks.forEach(task => (
          <Text>{task.body}</Text>
        ))}
      </Modal>
    )
  }
}

const editList = (listId, userId, tasks) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ listId, userId, tasks }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch('http://192.168.1.66:3000/lists', fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
        dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} })
      })
      .catch(err => console.log(err))
  }
}

ListModal.propTypes = {
  editList: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  toggleListModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  list: state.currentList,
  userId: state.userId,
  visible: state.ui.listModal,
})

const mapDispatchToProps = dispatch => ({
  toggleListModal: () => dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} }),
  editList: (listId, userId, tasks) => dispatch(editList(listId, userId, tasks)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListModal)
