import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actionTypes } from '../../actions'
import TaskList from './tasklist'

// TaskListContainer renders a TaskList component
class TaskListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskAndListTuples: [],
    }
    this.handleListSelect = this.handleListSelect.bind(this)
  }

  // save the task and the list containing it as a tuple, to easily render task alongside link to its list
  componentWillReceiveProps(nextProps) {
    const tuples = []
    nextProps.lists.forEach(list => {
      list.tasks.forEach(task => {
        tuples.push([task, list])
      })
    })
    this.setState({ taskAndListTuples: tuples })
  }

  // when user clicks a list, toggle the List modal and set the current list to the selected list
  handleListSelect(listObj) {
    this.props.selectList(listObj)
    this.props.toggleListModal()
  }

  render() {
    return (
      <TaskList
        taskAndListTuples={this.state.taskAndListTuples}
        handleListSelect={this.handleListSelect}
      />
    )
  }
}

TaskListContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  selectList: PropTypes.func.isRequired,
  toggleListModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  lists: state.lists,
})

const mapDispatchToProps = dispatch => ({
  selectList: listObj => dispatch({ type: actionTypes.SET_CURR_LIST, payload: listObj }),
  toggleListModal: () => dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer)
