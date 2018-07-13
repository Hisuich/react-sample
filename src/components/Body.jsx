import React from 'react';
import Menu from './Menu';
import Display from './Display';

const Body = (props) => {
        return (
        <div className='d-flex flex-row body'>
           <Menu />
           <Display store={props.store}/>
        </div>
    );
    }

export default Body;