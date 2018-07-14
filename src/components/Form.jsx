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
                <div className="">
                    <label htmlFor="fvalue">First Value: </label>
                    <input type="text" className="form-control" id="fvalue" ref={this.fvalue}/>
                    <label htmlFor="svalue">Second Value: </label>
                    <input type="text" className="form-control" if="svalue" ref={this.svalue}/>
                </div>
                <br />
            <button className="btn btn-secondary" type="submit">{this.props.action}</button>
            </form>
        </div>
    );}}

const mapStateToProps = state => {
    return ({
        action: state.action
    });
}

export default connect(mapStateToProps)(Form);

