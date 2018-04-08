import React from 'react';

// Stateless component
const MenuItem = props => (
    <li className="menu__item">{props.options.title} onClick={props.onClickItem}</li>
);

// Export the component
export default MenuItem;