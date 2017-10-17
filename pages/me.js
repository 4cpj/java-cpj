import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import rootApp from '../containers/app'
import {Wrapper, View} from '../containers/wrapper'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Breadcrumbs from '../components/Breadcrumbs/'
import ListContent from '../components/ListContent/'
import Relevant from '../components/Relevant/'
import {Theme} from '../components/config'
import {userPhotoStyle, userPhotoWrapperStyle} from '../components/config'

@rootApp @inject('store') @observer 
class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Header/>
        <Wrapper>
           <div style={{padding: '40px 0'}}>
             <div style={userPhotoWrapperStyle}>
                <img src="http://img1.sycdn.imooc.com/592e85a40001ce8102630265-100-100.jpg" style={userPhotoStyle}/>
             </div> 
             <div style={userPhotoWrapperStyle}>
                这位同学很懒，木有签名的说～
             </div>
           </div> 
        </Wrapper>
      </div>
    )
  }
}

export default Page
