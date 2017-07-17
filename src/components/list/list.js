import React, { Component } from 'react'
import { Button, Modal, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import style from './style'
import ListOfTasks from '../../ui/listoftasks'
import TaskEditModal from '../../ui/taskEditModal'

const List = ({
  closeEditModal,
  editTask,
  handleClose,
  handleNewTaskInput,
  handleTaskAdd,
  handleTaskRemove,
  handleTaskEdit,
  listModalVisibility,
  tasks,
  taskEditModalVisibility,
  taskEditText,
  todoBody,
  toggleTaskCompletion,
  toggleEditModal,
}) => (
  <Modal
    style={{ flex: 1 }}
    animationType={'slide'}
    visible={listModalVisibility}
    onRequestClose={() => handleClose()}
  >
    <Text>Add a new task!</Text>
    <TextInput
      style={style.textInput}
      onChangeText={text => handleNewTaskInput(text)}
      value={todoBody}
    />
    <Button
      title="Submit"
      onPress={() => handleTaskAdd()}
    />
    <ListOfTasks
      handleTaskRemove={handleTaskRemove}
      tasks={tasks}
      toggleTaskCompletion={toggleTaskCompletion}
      toggleEditModal={toggleEditModal}
    />
    <TaskEditModal
      closeEditModal={closeEditModal}
      editTask={editTask}
      taskEditModalVisibility={taskEditModalVisibility}
      handleTaskEdit={handleTaskEdit}
      taskEditText={taskEditText}
    />
  </Modal>
)

List.propTypes = {
  closeEditModal: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  taskEditModalVisibility: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleNewTaskInput: PropTypes.func.isRequired,
  handleTaskAdd: PropTypes.func.isRequired,
  handleTaskRemove: PropTypes.func.isRequired,
  handleTaskEdit: PropTypes.func.isRequired,
  listModalVisibility: PropTypes.bool.isRequired,
  tasks: PropTypes.array.isRequired,
  taskEditText: PropTypes.string.isRequired,
  todoBody: PropTypes.string.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
}

export default List
