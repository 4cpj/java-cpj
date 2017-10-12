import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import initStore from '../store'
import {login} from '../action/'

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)