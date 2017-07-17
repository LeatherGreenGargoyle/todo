import React from 'react'
import { Button, Modal, Text, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

const TaskEditModal = ({
  closeEditModal,
  editTask,
  taskEditModalVisibility,
  handleTaskEdit,
  taskEditText,
}) => (
  <Modal
    animationType={'slide'}
    visible={taskEditModalVisibility}
    onRequestClose={() => closeEditModal()}
  >
    <Text style={styles.header}>Enter edited task:</Text>
    <TextInput
      style={styles.textInputStyles}
      onChangeText={text => editTask(text)}
      value={taskEditText}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleTaskEdit()}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </Modal>
)

TaskEditModal.propTypes = {
  closeEditModal: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  taskEditModalVisibility: PropTypes.bool.isRequired,
  handleTaskEdit: PropTypes.func.isRequired,
  taskEditText: PropTypes.string.isRequired,
}

export default TaskEditModal
