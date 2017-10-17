import React from 'react'
import Style from './style'
import PropTypes from 'prop-types';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {data, defaultValue, click} = this.props
    return (
      <ul className="nav-wrapper">
        {
          this.props.data.length > 0 && this.props.data.map((item, index) => (
            <li className={`nav-item${defaultValue==item?' nav-item-active':''}`} 
                key={index} onClick={click?()=>click(item):undefined}>
                {item}
            </li>
          ))
        }
        <Style jsx/>
      </ul>
    )
  }
}

Nav.propTypes = {
  data: PropTypes.array.isRequired
}

export default Nav