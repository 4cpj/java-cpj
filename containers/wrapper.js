import React from 'react'
import PropTypes from 'prop-types';

export class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let wrapperStyle = {
         width: '100%',
         'minwidth': '1200px'
    }
    if(this.props.wrapperStyle){
       wrapperStyle = Object.assign(wrapperStyle, this.props.wrapperStyle)
    }
    let wrapperContentStyle = {
        position: 'relative',
        margin: '0 auto',
        width: '1100px'
    }
    if(this.props.wrapperContentStyle){
       wrapperContentStyle = Object.assign(wrapperContentStyle, this.props.wrapperContentStyle)
    }
    return (
      <div style={wrapperStyle}>
        <div style={wrapperContentStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Wrapper.propTypes = {
  wrapperStyle: PropTypes.object,
  wrapperContentStyle: PropTypes.object
}

export class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let viewStyle = {
        'borderRadius': '3px',
        border: '1px solid #e4e4e4'
    }
    if(this.props.viewStyle){
       viewStyle = Object.assign(viewStyle, this.props.viewStyle)
    }
    const className = this.props.className
    return (
      <div style={viewStyle} className={className}>
        {this.props.children}
      </div>
    )
  }
}

View.propTypes = {
  viewStyle: PropTypes.object,
  className: PropTypes.string
}