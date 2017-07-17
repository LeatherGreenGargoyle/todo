import React from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView } from 'react-native'
import List from '../list'
import styles from './style'

const TaskList = ({
  handleListSelect,
  taskAndListTuples,
}) => (
  <ScrollView>
    <Text style={styles.header}>Click to view list</Text>
    {taskAndListTuples.map((tuple, i) => (
      <Text
        style={styles.task}
        key={i}
        onPress={() => handleListSelect(tuple[1])}
      >
        {tuple[0].body}, from list {tuple[1].title}
      </Text>
    ))}
    <List />
  </ScrollView>
)

TaskList.propTypes = {
  handleListSelect: PropTypes.func.isRequired,
  taskAndListTuples: PropTypes.array.isRequired,
}

export default TaskList
