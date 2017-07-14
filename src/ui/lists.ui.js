import React from 'react'
import { ScrollView, Text } from 'react-native'
// import ListEntryUI from './listEntry.ui'

const ListUIStyles = {
  flex: 1,
}

const ListsUI = ({ lists }) => (
  <ScrollView style={ListUIStyles}>
    <Text>ListsUI</Text>
    {console.log(lists)}
    {lists.map(listObj => (
      <Text key={listObj._id}>{listObj.title}</Text>
    ))}
  </ScrollView>
)

export default ListsUI
/**
 * renders a listEntry container
 * listEntry container renders a modal
 */
