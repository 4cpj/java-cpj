import React from 'react'
import { Provider } from 'mobx-react'
import Store from '../store/'
export default function WithConnect(PageComponent){
  return function APP(){
      class Page extends React.Component {
          constructor (props) {
            super(props)
          }
          render () {
            return (
              <PageComponent />
            )
          }
      }
      return function(Connect){
          return class extends React.Component {
            constructor (props) {
              super(props)
              this.store = Store
            }
            render() {
              return (
                <Provider store={this.store}>
                  <Connect />
                </Provider>
              )
            }
          }
      }
  }()(PageComponent)
};