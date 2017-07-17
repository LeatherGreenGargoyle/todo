import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Navigator from './nav'

const NavContainer = ({ dispatch, nav }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

NavContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(NavContainer)
