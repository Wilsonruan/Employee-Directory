import React from "react";
import MaterialTable from "material-table";

export default function Directory() {
    return (
        <MaterialTable
            title="Employee Directory"
            columns={[
                { title: "Name", field: "name", cellStyle: { backgroundColor: 'lightblue' }, },
                { title: "Email", field: "email", cellStyle: { backgroundColor: 'lightblue' }, },
                { title: "Phone", field: "phone", cellStyle: { backgroundColor: 'lightblue' }, },
                { title: "Birth Year", field: "dob", cellStyle: { backgroundColor: 'lightblue' }, },
            ]}
            data={[
                {name: "Dwight Schrute", email: "Dwight_Schrute@office.ca", phone: "(477) 555-4284", dob: "1984"},
                {name: "John Krasinski", email: "John_Krasinski@office.ca", phone: "(481) 555-6218", dob: "1981"},
                {name: "Jenna Fischer", email: "Jenna_Fischer@office.ca", phone: "(132) 555-3474", dob: "1980"},
                {name: "Leslie David Baker", email: "Leslie_David_Baker@office.ca", phone: "(854) 555-6137", dob: "1980"},
                {name: "Brian Baumgartner", email: "Brian_Baumgartner@office.ca", phone: "(663) 555-5877", dob: "1990"},
                {name: "Angela Kinsey", email: "Angela_Kinsey@office.ca", phone: "(561) 555-1436", dob: "1986"},
                {name: "Phyllis Smith", email: "Phyllis_Smith@office.ca", phone: "(244) 555-8815", dob: "1989"},
                {name: "Kate Flannery", email: "Kate_Flannery@office.ca", phone: "(863) 555-6356", dob: "1984"},
                {name: "Creed Bratton", email: "Creed_Bratton@office.ca", phone: "(227) 555-4366", dob: "1981"},
                {name: "Oscar Nuñez", email: "Oscar_Nuñez@office.ca", phone: "(864) 555-3546", dob: "1980"},
                {name: "B.J. Novak", email: "B.J._Novak@office.ca", phone: "(677) 555-7762", dob: "1985"},
                {name: "Mindy Kaling", email: "Mindy_Kaling@office.ca", phone: "(651) 555-3368", dob: "1987"},
                {name: "Ed Helms", email: "Ed_Helms@office.ca", phone: "(774) 555-8831", dob: "1986"}                
            ]}
            options={{
                paging: false
            }}
        />
    )
}