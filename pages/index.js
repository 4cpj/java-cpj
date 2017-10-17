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
import {navArr, wrapperStyle, wrapperContentStyle} from '../components/config'

@rootApp @inject('store') @observer 
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       navData: navArr,
       defaultValue: navArr[0]
    };  
  }
  render () {
    return (
      <div style={{backgroundColor: '#f5f5f5'}}>
        <Header/>
     	  <Wrapper wrapperStyle={wrapperStyle} wrapperContentStyle={wrapperContentStyle}>
		       <Nav data={this.state.navData} defaultValue={this.state.defaultValue} click={(e)=>{this.handClick(e)}}/>
     	  </Wrapper>
        <Wrapper>
          <div style={{display: 'inline-block',verticalAlign: 'top', width: '750px',marginRight: '16px'}}>
            <View>
              <Breadcrumbs text={this.state.defaultValue}/>
            </View>
            <View viewStyle={{margin: '18px 0',backgroundColor: '#fff'}}>
              <div style={{padding: '13px 10px',color: Theme.black, fontSize: '15px',borderBottom: '1px solid #e4e4e4',fontWeight: 500}}>
                  免费区
              </div>
              <ListContent />
            </View>
          </div>

          <div style={{display: 'inline-block',verticalAlign: 'top', width: '300px'}}>
            <Relevant />
          </div>
        </Wrapper>
      </div>
    )
  }
  handClick(item){
    this.setState({
      defaultValue: item
    });
  }
}

export default Page
