import React from 'react'
import PropTypes from 'prop-types'
import Style from './style'

class Breadcrumbs extends React.Component {
  constructor(props) { 
    super(props);
  }
  render () {
    let text = this.props.text || '内容展示'
    return (
      <div style={this.props.style} className="breadcrumbs-wrapper">
          <div className="breadcrumbs-wrapper-before"></div>
         {text}
         <Style jsx/>
      </div>
    )
  }
}
Breadcrumbs.propTypes = {
  text: PropTypes.string
}
export default Breadcrumbs