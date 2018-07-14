import React, {Component} from 'react';
import {connect} from 'react-redux';

class Graph extends Component {
        render() {
            const props = this.props;

            return (
            <div className="d-flex flex-row display">
                <div className="p-2">
                    Result: <br />
                    {props.result}          
                </div>
            </div>
    );
}
}

const mapStateToProps = (state) => ({
    values: state.values,
    result: state.result
})

export default connect(mapStateToProps)(Graph);