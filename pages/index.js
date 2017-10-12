import React from 'react'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import App from '../containers/app'
import Header from '../components/Header'
import Link from 'next/link'

export default App(connect(state => state)((props) => {
  return (
    <div>
      <Header userInfo={props.userInfo} login={props.login} dispatch={props.dispatch}/>
      <Link href="/me"><a>我的中心1</a></Link>
    </div>
  )
}))