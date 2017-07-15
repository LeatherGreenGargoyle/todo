import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ListEntryUI from './listEntry.ui'

const ListUIStyles = {
  flex: 1,
}

const ListsUI = ({ lists, toggleListModal, selectList, handleListRemove }) => {
  const handlePress = (listObj) => {
    selectList(listObj)
    toggleListModal()
  }

  return (<ScrollView style={ListUIStyles}>
    {lists.map((listObj, i) => (
      <View>
        <Text
          key={i}
          onPress={() => handlePress(listObj)}
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
  </ScrollView>)
}

export default ListsUI
