import React, {Component} from 'react';
import {connect} from 'react-redux';

class Link extends Component {
    
    onClick = () => {
        this.props.dispatch({
            type: 'SET_ACTION',
            action: this.props.value.toUpperCase()
        })
    }

    render () {
        return (
        <div className="p-2 item"
            onClick={this.onClick}>
            {this.props.value}
         </div>
    );
}
}

export default connect()(Link);