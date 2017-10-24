import React, {Component} from 'react'
import Style from './style'

class Rinput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={this.props.style} className="Rinput-wrapper">
                <input className="normalInput" type="text"/>
                <Style/>
            </div>
        )
    }
}

export default Rinput