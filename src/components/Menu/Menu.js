import React from 'react';
import MenuItem from "../MenuItem/MenuItem";

const Menu = props => (
    <nav className="menu">
        {
            props.options.map(item => (
                <MenuItem options={item}/>
            ))
        }
    </nav>
);

export default Menu;