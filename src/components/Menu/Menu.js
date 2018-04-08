import React from 'react';
import MenuItem from "../MenuItem/MenuItem";

// Stateless component
const Menu = props => (
    <nav className="menu">
            <ul>
                {
                    props.options.map(item => (
                        <MenuItem options={item}/>
                    ))
                }
            </ul>
    </nav>
);

// Export the component
export default Menu;