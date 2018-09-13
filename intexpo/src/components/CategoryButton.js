import React from 'react';
import '../style.css';

function CategoryButton(props){
    return <div className="dropdown">{props.categoryName}</div>
}

export default CategoryButton;