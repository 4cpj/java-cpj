import React from 'react'
import Style from './style'
import PropTypes from 'prop-types';
import Link from 'next/link'
import {dateLeave} from '../utils';

class ListContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const data = [
      {answerer: '聆听清风', answereDate: '1507564500',info:'10 个 CSS、SVG 和 Canvas 蒙版（mask）精彩实例'},
      {answerer: '聆听东风', answereDate: '1507564800',info:'【面经】猿题库-2017年8月25日，散招实习生'},
      {answerer: '聆听西风', answereDate: '1508124877',info:'[译]借助函数完成可组合的数据类型（软件编写）（第十部分）'},
    ]
    return (
      <ul className="list-wrapper">
        {
          data.length>0 && data.map((item, index) => (
            <li key={new Date().getTime() + index} className="list-item">
                <ul className="meta-list">
                  <li className="item title">
                    {item.answerer}
                  </li>
                  <li className="item">
                    {dateLeave(item.answereDate)}
                  </li>
                </ul>
                <div className="info-row">
                  <Link href={'/post/'+new Date().getTime()}>
                      {item.info}
                  </Link>
                </div>
            </li>
          ))
        }
        <Style jsx/>
      </ul>
    )
  }
}

/* ListContent.propTypes = {
  data: PropTypes.array.isRequired
} */

export default ListContent