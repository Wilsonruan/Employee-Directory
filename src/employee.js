import React, { Component } from 'react';

function employee(props) {
  return (
    <tr>
      <td>Name: {props.name}</td>
      <td>Email: {props.email}</td>
      <td>Phone: {props.phone}</td>
      <td>DOB: {props.dob}</td>
    </tr>
  )
}

export default employee;