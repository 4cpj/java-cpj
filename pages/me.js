import React from 'react'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import App from '../containers/app'
import Header from '../components/Header'
import Link from 'next/link'

export default App(connect(state => state)((props) => {
  return (
    <div>
      <Header userInfo={props.userInfo}/>
       <Link href="/"><a>首页</a></Link>
    </div>
  )
}))