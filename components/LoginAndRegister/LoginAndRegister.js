import React, {Component} from 'react'
import Rinput from './../Rinput/Rinput'
import Button from './../Button/index'
import Style from './style'

class LoginAndRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden:false
        }
    }
    render() {
        return (
            <div style={this.props.style} className={`LoginAndRegister-wrapper ${this.state.hidden?'hidden':''}`}>
                <Rinput/>
                <Button handleClick={this.handleClickPr.bind(this)}/>
                <Style jsx/>
            </div>
        )
    }
    handleClickPr() {
        this.setState({
            hidden:!this.state.hidden
        })

    }
}

export default LoginAndRegister