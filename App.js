import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import RootNav from './src/navigation/rootNav/rootNav'

export default () => (
  <Provider store={store}>
    <RootNav />
  </Provider>
)
