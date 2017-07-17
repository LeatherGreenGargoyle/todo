import React from 'react'
import { Button, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import ListOfLists from '../../ui/listoflists'
import List from '../list'
import Styles from './style'

const Lists = ({
  currentNewList,
  handleListRemove,
  handleNewListInput,
  handleSubmitNewList,
  handleListClick,
  lists,
}) => (
  <View style={Styles.list}>
    <TextInput
      style={Styles.textInput}
      onChangeText={newList => handleNewListInput(newList)}
      value={currentNewList}
    />
    <Button
      title="Submit"
      onPress={() => handleSubmitNewList()}
    />
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
