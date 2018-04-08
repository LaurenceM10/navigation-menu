import React from 'react';
import MenuItem from "../MenuItem/MenuItem";

// Stateless component
const Menu = props => (
    <nav className="menu">
            <ul>
                {
                    props.options.map(item => (
                        <MenuItem options={item} onClickItem={props.onClickItem}/>
                    ))
                }
            </ul>
    </nav>
);

// Export the component
export default Menu;