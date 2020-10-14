import React, {Component} from 'react';
import Employee from './employee';

function employeeList(props) {
    let employees = props.filteredEmployees.map((employee, i) => {
        return <Employee key={i} name={employee.name} email={employee.email}/>
    })
    return (
        <div>
            {employees}
        </div>
    )
}

export default employeeList;
