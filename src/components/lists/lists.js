import React from 'react'
import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import ListOfLists from '../../ui/listoflists'
import List from '../list'
import Styles from './style'

// List component renders the UI component ListOfLists
const Lists = ({
  currentNewList,
  handleListRemove,
  handleNewListInput,
  handleSubmitNewList,
  handleListClick,
  lists,
}) => (
  <View style={Styles.list}>
    <Text style={Styles.headers}>To make a new list, enter a listname: </Text>
    <TextInput
      style={Styles.textInput}
      onChangeText={newList => handleNewListInput(newList)}
      value={currentNewList}
    />
    <TouchableOpacity
      style={Styles.button}
      onPress={() => handleSubmitNewList()}
    >
      <Text style={Styles.buttonText}>Submit</Text>
    </TouchableOpacity>    
    <Text style={Styles.headers}>Click a list to view: </Text>
    <ListOfLists
      lists={lists}
      handleListClick={handleListClick}
      handleListRemove={handleListRemove}
    />
    <List />
  </View>
)

Lists.propTypes = {
  currentNewList: PropTypes.string.isRequired,
  handleListRemove: PropTypes.func.isRequired,
  handleNewListInput: PropTypes.func.isRequired,
  handleSubmitNewList: PropTypes.func.isRequired,
  handleListClick: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
}

export default Lists
