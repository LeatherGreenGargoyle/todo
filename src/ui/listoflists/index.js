import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

// presentational component used to display list of all todo lists
const ListOfLists = ({ lists, handleListClick, handleListRemove }) => (
  <ScrollView style={styles.listOfLists}>
    {lists.map((listObj, i) => (
      <View>
        <Text
          style={styles.listTitle}
          key={i}
          onPress={() => handleListClick(listObj)}
        >
          {listObj.title}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleListRemove(i)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
)

ListOfLists.propTypes = {
  lists: PropTypes.array.isRequired,
  handleListClick: PropTypes.func.isRequired,
  handleListRemove: PropTypes.func.isRequired,
}

export default ListOfLists
