import React from 'react';

export default (props) => (
    <div className="pa2 ">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Robots" 
            onChange={(e)=>props.onSearch(e.target.value)}
            />
    </div>
)