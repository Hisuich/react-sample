import React, {Component} from 'react';
import {connect} from 'react-redux';

class Graph extends Component {
        render() {
            const props = this.props;
            console.log(this.props);

            return (
        <div className="d-flex flex-row graph">
           {props.values.map(value => {
               return (
                   <div className="p-2 value">{value}</div>
               );
           })}
           <div className="p-2 value-3">
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