import React from 'react'
import Style from './style'
import PropTypes from 'prop-types';
import Link from 'next/link'
import {Theme} from '../config'
import {View} from '../../containers/wrapper'
import {dateLeave} from '../utils';

class Relevant extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const data = [
      {answerer: '聆听清风', answereDate: '1507564500',info:'10 个 CSS、SVG 和 Canvas 蒙版（mask）精彩实例'},
      {answerer: '聆听东风', answereDate: '1507564800',info:'【面经】猿题库-2017年8月25日，散招实习生'},
      {answerer: '聆听西风', answereDate: '1508124877',info:'[译]借助函数完成可组合的数据类型（软件编写）（第十部分）'},
      {answerer: '聆听北风', answereDate: '1508125228',info:'从template到DOM(Vue.js源码角度看内部运行机制)'}
    ]
    return (
       <View viewStyle={{backgroundColor: '#fff'}}>
          <div style={{padding: '14px 13px',color: Theme.black, fontSize: '12px',borderBottom: '1px solid #e4e4e4',fontWeight: 400}}>
            与我相关
          </div>
          <ul className="relevant-wrapper">
            {
              data.length>0 && data.map((item, index) => (
                <li key={new Date().getTime() + index} className="relevant-item">
                  <ul className="relevant-list">
                    <li className="item">
                      <span class="relevant-type">
                        免费
                      </span>
                      <Link href={'/me'}>
                        <a class="relevant-answer">{item.answerer}</a>
                      </Link>
                      <li className="item">
                        {dateLeave(item.answereDate) + ' 回答了您的问题'}
                      </li>
                    </li>
                  </ul>
                </li>
              ))
            }
            
           </ul>
           <Style jsx/>
       </View>
    )
  }
}
 

export default Relevant