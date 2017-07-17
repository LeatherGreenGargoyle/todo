import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import List from '../list'

const TaskList = ({
  handleListSelect,
  taskAndListTuples,
}) => (
  <View>
    {taskAndListTuples.map((tuple, i) => (
      <Text key={i} onPress={() => handleListSelect(tuple[1])}>
        {tuple[0].body}, from {tuple[1].title}
      </Text>
    ))}
    <List />
  </View>
)

TaskList.propTypes = {
  handleListSelect: PropTypes.func.isRequired,
  taskAndListTuples: PropTypes.array.isRequired,
}

export default TaskList
