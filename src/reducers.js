import { combineReducers } from 'redux'
import mainNav from './navigation/mainNav/mainNav.duck'
import rootNav from './navigation/rootNav/rootNav.duck'


export default combineReducers({ rootNav, mainNav })
