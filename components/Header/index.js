import React from 'react'
import Link from 'next/link'
import Search from '../../components/Search/'
import Button from '../../components/Button/'
import Style from './style'
import { inject, observer } from 'mobx-react'

@inject('store') @observer 
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {userInfo} = this.props.store
    console.log( this.props.store);
    return (
      <div className="header-wrapper">
        <div className="header">
          <div className="logo">匠</div>
          <Link href="/">
            <a className="home-nav">首页</a>
          </Link>
          <Search />
          <div className="header-wrapper-right">
             <Button text="提问" /> 
             <Button text="写文章" className="button-write" style={{'margin': '0 5px', padding: '5px 12px'}}/>
              { 
                userInfo.userName ? 
                <a className="button-portrait">
                  <img src={userInfo.portrait ? userInfo.portrait : "./static/img/userIcon.png"}/>
                </a>
                : 
                <div className="loginWrapper-nav">
                  <a className="login-nav" onClick={this.login.bind(this)}>登录</a>
                   / 
                  <a className="login-nav" onClick={this.login.bind(this)}>注册</a>
                </div>
              }
          </div>
          <Style jsx/>
        </div>
      </div>
    )
  }
  login () { 
    let {userInfo} = this.props.store
    userInfo.login({userName: 'lijc',password: '000000',portrait: 'http://img1.sycdn.imooc.com/592e85a40001ce8102630265-100-100.jpg'})
  }

}

export default Header