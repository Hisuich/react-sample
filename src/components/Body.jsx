import React from 'react';
import Menu from './Menu';
import Form from './Form';
import Display from './Display';

const Body = (props) => {
        return (
        <div className='d-flex flex-row body'>
           <Menu />
           <Form />
           <Display />
        </div>
    );
    }

export default Body;