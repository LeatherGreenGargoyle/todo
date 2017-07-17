import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import Navigator from './src/navigation'

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)
