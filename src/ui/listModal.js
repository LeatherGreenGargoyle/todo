import React, { Component } from 'react'
import { Button, Modal, Text, TextInput, View } from 'react-native'
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
      editModal: false,
      editTask: '',
      idxToEdit: null,
    }
    this.handlePress.bind(this)
    this.handleClose.bind(this)
    this.toggleComplete.bind(this)
    this.toggleEditModal.bind(this)
    this.handleTaskEdit.bind(this)
    this.handleTaskRemove.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const newTasks = [...nextProps.list.tasks]
    this.setState({ tasks: newTasks })
  }

  handlePress() {
    const newState = [...this.state.tasks]
    const newTask = {
      completed: false,
      body: this.state.todoBody,
    }
    newState.push(newTask)
    this.setState({ todoBody: '', tasks: newState })
  }

  handleClose() {
    if (JSON.stringify(this.state.tasks) !== JSON.stringify(this.props.list.tasks)) {
      this.props.editList(this.props.list._id, this.props.userId, this.state.tasks)
    } else {
      this.props.toggleListModal()
    }
  }

  handleTaskEdit(idx) {
    const selectedTask = {}
    selectedTask.body = this.state.editTask
    selectedTask.completed = this.state.tasks[this.state.idxToEdit].completed
    const newTasks = [...this.state.tasks]
    newTasks[this.state.idxToEdit] = selectedTask
    this.setState({ tasks: newTasks, editModal: false, editTask: '' })
  }

  handleTaskRemove(idx) {
    const newTasks = [...this.state.tasks]
    newTasks.splice(idx, 1)
    this.setState({ tasks: newTasks })
  }

  toggleEditModal(idx) {
    this.setState({ editModal: !this.state.editModal, idxToEdit: idx })
  }

  toggleComplete(idx) {
    const selectedTask = {}
    selectedTask.completed = !this.state.tasks[idx].completed
    selectedTask.body = this.state.tasks[idx].body
    const newTasks = [...this.state.tasks]
    newTasks[idx] = selectedTask
    this.setState({ tasks: newTasks })
  }

  render() {
    return (
      <Modal
        style={{ flex: 1 }}
        animationType={'slide'}
        visible={this.props.visible}
        onRequestClose={() => this.handleClose()}
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
        <Text>Tasks: </Text>
        {this.state.tasks.map((task, i) => (
          <View>
            <Text
              key={i}
              onPress={() => this.toggleComplete(i)}
            >
              {task.body} Complete? {JSON.stringify(task.completed)}
            </Text>
            <Text
              onPress={() => this.toggleEditModal(i)}
            >Edit task</Text>
            <Text
              onPress={() => this.handleTaskRemove(i)}
            >Delete Task</Text>
          </View>
        ))}
        <Modal
          animationType={'slide'}
          visible={this.state.editModal}
          onRequestClose={() => this.setState({ editModal: !this.state.editModal })}
        >
          <TextInput
            style={textInputStyles}
            onChangeText={editTask => this.setState({ editTask })}
            value={this.state.editTask}
          />
          <Button
            title="Submit"
            onPress={() => this.handleTaskEdit()}
          />
        </Modal>
      </Modal>
    )
  }
}

const editList = (listId, userId, tasks) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'PATCH',
      body: JSON.stringify({ listId, userId, tasks }),
      headers: { 'Content-Type': 'application/JSON' },
    }
    // console.log(JSON.stringify({ listId, userId, tasks }))
    return fetch('http://10.0.0.105:3000/lists', fetchInit)
      .then(() => fetch('http://10.0.0.105:3000/lists', fetchInit))
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
