import React, {Component} from 'react';

function employee(props) {
    return (
        <div style={{width: 200, border: 'solid'}}>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default employee;