import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MainNav from './mainNav'

const MainNavComponent = ({ dispatch, nav }) => (
  <MainNav navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

MainNavComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(MainNavComponent)
