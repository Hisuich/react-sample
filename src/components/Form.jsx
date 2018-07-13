import React, {createRef} from 'react';
import {connect} from 'react-redux';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.fvalue = createRef();
        this.svalue = createRef();
        this.values = [];
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.values[0] = this.fvalue.current.value;
        this.values[1] = this.svalue.current.value;
        console.log(this.values);
        this.props.dispatch({
            type: this.props.action,
            values: this.values
        });
    }

    render = () => {
        return (
        <div>
            <form className="form" onSubmit={this.onSubmit}>
                <div>
                    <input type="text" ref={this.fvalue}/><br />
                    <input type="text" ref={this.svalue}/><br />  
                </div>
            <button type="submit">Send</button>  <br />
            </form>
        </div>
    );}}

const mapStateToProps = state => {
    return ({
        action: state.action
    });
}

export default connect(mapStateToProps)(Form);

