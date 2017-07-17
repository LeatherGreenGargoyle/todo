import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editList, toggleListModal } from '../../actions'
import List from './list'

// ListContainer renders a single List component
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
    this.handleTaskEdit = this.handleTaskEdit.bind(this)
    this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this)
    this.handleTaskRemove = this.handleTaskRemove.bind(this)
    this.handleTaskAdd = this.handleTaskAdd.bind(this)
    this.handleNewTaskInput = this.handleNewTaskInput.bind(this)

    this.closeEditModal = this.closeEditModal.bind(this)
    this.toggleEditModal = this.toggleEditModal.bind(this)

    this.handleListScreenClose = this.handleListScreenClose.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const newTasks = [...nextProps.list.tasks]
    this.setState({ tasks: newTasks })
  }

  closeEditModal() {
    this.setState({ editModal: false })
  }

  editTask(text) {
    this.setState({ editTask: text })
  }

  // add the task entered into TextInput to local state
  handleTaskAdd() {
    const newState = [...this.state.tasks]
    const newTask = {
      completed: false,
      body: this.state.todoBody,
    }
    newState.push(newTask)
    this.setState({ todoBody: '', tasks: newState })
  }

  // on List close, compare set of tasks to original tasks; if different, update the list in database
  handleListScreenClose() {
    if (JSON.stringify(this.state.tasks) !== JSON.stringify(this.props.list.tasks)) {
      this.props.editList(this.props.list._id, this.props.userId, this.state.tasks)
    } else {
      this.props.toggleListModal()
    }
  }

  // on submission of task edit, update the task in local state
  handleTaskEdit() {
    const selectedTask = {}
    selectedTask.body = this.state.editTask
    selectedTask.completed = this.state.tasks[this.state.idxToEdit].completed
    const newTasks = [...this.state.tasks]
    newTasks[this.state.idxToEdit] = selectedTask
    this.setState({ tasks: newTasks, editModal: false, editTask: '' })
  }

  // remove task from local state
  handleTaskRemove(idx) {
    const newTasks = [...this.state.tasks]
    newTasks.splice(idx, 1)
    this.setState({ tasks: newTasks })
  }

  // add currently-inputting task to local state
  handleNewTaskInput(newTask) {
    this.setState({ todoBody: newTask })
  }

  toggleEditModal(idx) {
    this.setState({ editModal: !this.state.editModal, idxToEdit: idx })
  }

  // update task's completion in local state
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
        handleClose={this.handleListScreenClose}
        handleNewTaskInput={this.handleNewTaskInput}
        handleTaskAdd={this.handleTaskAdd}
        handleTaskRemove={this.handleTaskRemove}
        handleTaskEdit={this.handleTaskEdit}
        listModalVisibility={this.props.listModalVisibility}
        listTitle={this.props.list.title}
        tasks={this.state.tasks}
        taskEditText={this.state.editTask}
        todoBody={this.state.todoBody}
        toggleTaskCompletion={this.toggleTaskCompletion}
        toggleEditModal={this.toggleEditModal}
      />
    )
  }
}

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
  toggleListModal: () => dispatch(toggleListModal()),
  editList: (listId, userId, tasks) => dispatch(editList(listId, userId, tasks)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
