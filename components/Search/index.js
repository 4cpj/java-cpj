import React from 'react'
import Style from './style'


class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const placeholder = this.props.placeholder || '请输入关键字'
    return (
      <div className="search-wrapper">
        <input type="text" className="cpj-search" placeholder={placeholder}/>
        <i className="icon-search"></i>
        <Style jsx/>
      </div>
    )
  }
}

export default Search