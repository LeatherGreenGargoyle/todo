import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const LoginScreen = ({ navToMain }) => (
  <View>
    <Text>Login will go here</Text>
    <Button
      title={'To Main'}
      onPress={navToMain}
    />
  </View>
)

const mapStateToProps = state => ({ nav: state.nav })

const mapDispatchToProps = dispatch => ({
  navToMain: () => dispatch(NavigationActions.navigate({ routeName: 'Main' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
