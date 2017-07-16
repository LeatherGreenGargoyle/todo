import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

const ListOfLists = ({ lists, handleListClick, handleListRemove }) => (
  <ScrollView style={styles.listOfLists}>
    {lists.map((listObj, i) => (
      <View>
        <Text
          key={i}
          onPress={() => handleListClick(listObj)}
        >
          {listObj.title}
        </Text>
        <Text
          onPress={() => handleListRemove(i)}
        >
          Delete List
        </Text>
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
