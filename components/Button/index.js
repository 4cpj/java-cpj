import React from 'react'
import PropTypes from 'prop-types'
import Style from './style'

class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
  }
  static defaultProps = {
    text: '确定',
    className: 'button-primary'
  };
  constructor(props) { 
    super(props);
  }
  render () {
    return (
      <a style={this.props.style} className={"button-wrapper " + this.props.className}  onClick={this.props.handleClick}>
         {this.props.text}
         <Style jsx/>
      </a>
    )
  }
}

export default Button