import React from 'react';
import Link from './Link';

const Menu = () => {
    return (
        <div className="d-flex flex-column justify-content-between menu">
                <Link value="Addition"/>
                <Link value="Substraction"/>
                <Link value="Multiplication"/>
                <Link value="Dividing"/>
        </div>
    );
}

export default Menu;