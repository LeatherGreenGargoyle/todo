import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

const LoginScreen = () => (
  <View>
    <Text>Login will go here</Text>
  </View>
)

const mapStateToProps = state => ({ nav: state.nav })

const mapDispatchToProps = dispatch => ({
  navToMain: () => dispatch({ type: 'NavToMain' })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
