import React from 'react';
import Form from './Form';
import Graph from './Graph';


const Display = (props) => {
    
        return (
        <div className="d-flex flex-row display">
            <Form store={props.store}/>
            <Graph />
        </div>
    );
    }


export default Display;