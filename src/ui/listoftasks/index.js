import React from 'react'
import { Text, TouchableOpacity, ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

// presentational component used to render tasks within a list
const ListOfTasks = ({
  handleTaskRemove,
  tasks,
  toggleTaskCompletion,
  toggleEditModal,
}) => (
  <ScrollView style={styles.list}>
    <Text style={styles.header}>Click to toggle completion: </Text>

    {tasks.map((task, i) => (
      <View>
        <Text
          style={styles.task}
          key={i}
          onPress={() => toggleTaskCompletion(i)}
        >
          {task.body}
        </Text>

        <Text style={styles.completionNotice}>
          {task.completed ? 'complete!' : 'incomplete'}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => toggleEditModal(i)}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTaskRemove(i)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>

      </View>
    ))}
  </ScrollView>
)

ListOfTasks.propTypes = {
  handleTaskRemove: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
}

export default ListOfTasks
