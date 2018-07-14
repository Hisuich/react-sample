import React from 'react';
import Menu from './Menu';
import Form from './Form';
import Display from './Display';

const Body = (props) => {
        return (
        <div className='d-flex flex-row justify-content-between body'>
            <Menu />
            <Display />
            <Form />
        </div>
    );
    }

export default Body;