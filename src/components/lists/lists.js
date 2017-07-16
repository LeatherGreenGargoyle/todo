import React from 'react'
import { Button, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import ListsUI from '../../ui/lists.ui'
import ListModal from '../../ui/listModal'
import Styles from './style'

const Lists = ({
  currentNewList,
  handleListRemove,
  handleNewListInput,
  handleSubmitNewList,
  lists,
  selectList,
  toggleListModal,
}) => (
  <View style={Styles.listStyles}>
    <TextInput
      style={Styles.textInputStyles}
      onChangeText={newList => handleNewListInput(newList)}
      value={currentNewList}
    />
    <Button
      title="Submit"
      onPress={() => handleSubmitNewList()}
    />
    <ListsUI
      lists={lists}
      selectList={selectList}
      toggleListModal={toggleListModal}
      handleListRemove={handleListRemove}
    />
    <ListModal />
  </View>
)

Lists.propTypes = {
  currentNewList: PropTypes.string.isRequired,
  handleListRemove: PropTypes.func.isRequired,
  handleNewListInput: PropTypes.func.isRequired,
  handleSubmitNewList: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  selectList: PropTypes.func.isRequired,
  toggleListModal: PropTypes.func.isRequired,
}

export default Lists
