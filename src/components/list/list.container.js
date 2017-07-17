import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actionTypes, editList } from '../../actions'
import List from './list'

class ListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoBody: '',
      tasks: [],
      editModal: false,
      editTask: '',
      idxToEdit: null,
    }
    this.editTask = this.editTask.bind(this)
    this.closeEditModal = this.closeEditModal.bind()
    this.handleTaskAdd = this.handleTaskAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this)
    this.toggleEditModal = this.toggleEditModal.bind(this)
    this.handleTaskEdit = this.handleTaskEdit.bind(this)
    this.handleTaskRemove = this.handleTaskRemove.bind(this)
    this.handleNewTaskInput = this.handleNewTaskInput.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const newTasks = [...nextProps.list.tasks]
    this.setState({ tasks: newTasks })
  }

  closeEditModal() {
    this.setState({ editModal: !this.state.editModal })
  }

  editTask(text) {
    this.setState({ editTask: text })
  }

  handleTaskAdd() {
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

  handleTaskEdit() {
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

  handleNewTaskInput(newTask) {
    this.setState({ todoBody: newTask })
  }

  toggleEditModal(idx) {
    this.setState({ editModal: !this.state.editModal, idxToEdit: idx })
  }

  toggleTaskCompletion(idx) {
    const selectedTask = {}
    selectedTask.completed = !this.state.tasks[idx].completed
    selectedTask.body = this.state.tasks[idx].body
    const newTasks = [...this.state.tasks]
    newTasks[idx] = selectedTask
    this.setState({ tasks: newTasks })
  }

  render() {
    return (
      <List
        closeEditModal={this.closeEditModal}
        editTask={this.editTask}
        taskEditModalVisibility={this.state.editModal}
        handleClose={this.handleClose}
        handleNewTaskInput={this.handleNewTaskInput}
        handleTaskAdd={this.handleTaskAdd}
        handleTaskRemove={this.handleTaskRemove}
        handleTaskEdit={this.handleTaskEdit}
        listModalVisibility={this.props.listModalVisibility}
        tasks={this.state.tasks}
        taskEditText={this.state.editTask}
        todoBody={this.state.todoBody}
        toggleTaskCompletion={this.toggleTaskCompletion}
        toggleEditModal={this.toggleEditModal}
      />
    )
  }
}

// const editList = (listId, userId, tasks) => {
//   return (dispatch) => {
//     const fetchInit = {
//       method: 'PATCH',
//       body: JSON.stringify({ listId, userId, tasks }),
//       headers: { 'Content-Type': 'application/JSON' },
//     }
//     return fetch('http://192.168.1.66:3000/lists', fetchInit)
//       .then(() => fetch('http://192.168.1.66:3000/lists', fetchInit))
//       .then(data => data.json())
//       .then((userObj) => {
//         dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
//         dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} })
//       })
//       .catch(err => console.log(err))
//   }
// }

ListContainer.propTypes = {
  editList: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
  listModalVisibility: PropTypes.bool.isRequired,
  toggleListModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  list: state.currentList,
  userId: state.userId,
  listModalVisibility: state.ui.listModal,
})

const mapDispatchToProps = dispatch => ({
  toggleListModal: () => dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} }),
  editList: (listId, userId, tasks) => dispatch(editList(listId, userId, tasks)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
