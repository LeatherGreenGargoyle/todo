import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import NavigatorComponent from './src/navigation/navComponent'

export default () => (
  <Provider store={store}>
    <NavigatorComponent />
  </Provider>
)
