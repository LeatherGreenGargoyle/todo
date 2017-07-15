import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ListEntryUI from './listEntry.ui'

const ListUIStyles = {
  flex: 1,
}

const ListsUI = ({ lists, toggleListModal, selectList }) => {
  const handlePress = (listObj) => {
    selectList(listObj)
    toggleListModal()
  }

  return (<ScrollView style={ListUIStyles}>
    {lists.map((listObj, i) => (
      <Text
        key={i}
        onPress={() => handlePress(listObj)}
      >
        {listObj.title}
      </Text>
    ))}
  </ScrollView>)
}

export default ListsUI
