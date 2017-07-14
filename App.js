import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import NavigatorComponent from './src/navigation/nav.component'

export default () => (
  <Provider store={store}>
    <NavigatorComponent />
  </Provider>
)
