import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RootNav from './rootNav'

const RootNavComponent = ({ dispatch, nav }) => (
  <RootNav navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

RootNavComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(RootNavComponent)
