import React from 'react';

export default (props) => (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" style={{minWidth: '250px', minHeight: '250px'}}>
       <img alt='Robot' src={props.img} />
       <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
       </div>
    </div>
)