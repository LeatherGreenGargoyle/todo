import React from 'react'
import {
  Button,
  Modal,
  TextInput,
} from 'react-native'
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
    <TextInput
      style={styles.textInputStyles}
      onChangeText={text => editTask(text)}
      value={taskEditText}
    />
    <Button
      title="Submit"
      onPress={() => handleTaskEdit()}
    />
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
