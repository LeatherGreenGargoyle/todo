import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store'
import RootNavWithState from './src/navigation/navigators'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavWithState />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
