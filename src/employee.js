import React, { Component } from 'react';

function employee(props) {
  return (
    <tr>
      <th>Name: {props.name}</th>
      <th>Email: {props.email}</th>
      <th>Phone: {props.phone}</th>
      <th>DOB: {props.dob}</th>
    </tr>
  )
}

export default employee;