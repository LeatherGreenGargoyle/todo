import React from 'react'
import {
  Tasks,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

const ListOfTasks = ({
  handleTaskRemove,
  tasks,
  toggleTaskCompletion,
  toggleEditModal,
}) => (
  <View>
    <Text>Tasks: </Text>
    {tasks.map((task, i) => (
      <View>
        <Text
          key={i}
          onPress={() => toggleTaskCompletion(i)}
        >
          {task.body} Complete? {JSON.stringify(task.completed)}
        </Text>
        <Text
          onPress={() => toggleEditModal(i)}
        >Edit task</Text>
        <Text
          onPress={() => handleTaskRemove(i)}
        >Delete Task</Text>
      </View>
    ))}
  </View>
)

ListOfTasks.propTypes = {
  handleTaskRemove: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
}

export default ListOfTasks
