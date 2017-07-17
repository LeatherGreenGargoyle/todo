import React from 'react'
import { Modal, Text, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import ListOfTasks from '../../ui/listoftasks'
import TaskEditModal from '../../ui/taskEditModal'

// List component renders the UI component ListOfTasks
const List = ({
  closeEditModal,
  editTask,
  handleClose,
  handleNewTaskInput,
  handleTaskAdd,
  handleTaskRemove,
  handleTaskEdit,
  listModalVisibility,
  listTitle,
  tasks,
  taskEditModalVisibility,
  taskEditText,
  todoBody,
  toggleTaskCompletion,
  toggleEditModal,
}) => (
  <Modal
    style={{ flex: 1, padding: 5 }}
    animationType={'slide'}
    visible={listModalVisibility}
    onRequestClose={() => handleClose()}
  >
    <Text style={styles.title}>{listTitle}</Text>
    <Text style={styles.addTaskHeader}>Type to add task: </Text>

    <TextInput
      style={styles.textInput}
      onChangeText={text => handleNewTaskInput(text)}
      value={todoBody}
    />
    
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleTaskAdd()}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>

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
  listTitle: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  taskEditText: PropTypes.string.isRequired,
  todoBody: PropTypes.string.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
}

export default List
