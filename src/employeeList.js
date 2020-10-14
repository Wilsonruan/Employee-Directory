import React, { Component } from 'react';
import Employee from './employee';

function employeeList(props) {
  let employees = props.filteredEmployees.map((employee, i) => {
    return <Employee key={i} name={employee.name} email={employee.email} phone={employee.phone} dob={employee.dob}/>
  })
  return (
    <table>
      {employees}
    </table>
  )
}

export default employeeList;
