import React from 'react';

export default (props) => (
    <div style={{
        overflowY: 'scroll',
        height: '650px',
        margin: '10px',
        border: '1px solid black',
        boxShadow: '0 0 5px darkgrey'
    }}>
        {props.children}
    </div>
)