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
                {name: "Dwight Schrute", email: "Dwight_Schrute@office.ca", phone: "(477) 555-4284", dob: "Dec-23-84"},
                {name: "John Krasinski", email: "John_Krasinski@office.ca", phone: "(481) 555-6218", dob: "Oct-6-81"},
                {name: "Jenna Fischer", email: "Jenna_Fischer@office.ca", phone: "(132) 555-3474", dob: "Feb-1-80"},
                {name: "Leslie David Baker", email: "Leslie_David_Baker@office.ca", phone: "(854) 555-6137", dob: "Dec-20-80"},
                {name: "Brian Baumgartner", email: "Brian_Baumgartner@office.ca", phone: "(663) 555-5877", dob: "Nov-1-90"},
                {name: "Angela Kinsey", email: "Angela_Kinsey@office.ca", phone: "(561) 555-1436", dob: "May-27-86"},
                {name: "Phyllis Smith", email: "Phyllis_Smith@office.ca", phone: "(244) 555-8815", dob: "Mar-13-89"},
                {name: "Kate Flannery", email: "Kate_Flannery@office.ca", phone: "(863) 555-6356", dob: "Jun-2-84"},
                {name: "Creed Bratton", email: "Creed_Bratton@office.ca", phone: "(227) 555-4366", dob: "May-20-81"},
                {name: "Oscar Nuñez", email: "Oscar_Nuñez@office.ca", phone: "(864) 555-3546", dob: "Sept-5-80"},
                {name: "B.J. Novak", email: "B.J._Novak@office.ca", phone: "(677) 555-7762", dob: "Jan-8-85"},
                {name: "Mindy Kaling", email: "Mindy_Kaling@office.ca", phone: "(651) 555-3368", dob: "Oct-13-87"},
                {name: "Ed Helms", email: "Ed_Helms@office.ca", phone: "(774) 555-8831", dob: "Jan-18-86"}
            ]}
            options={{
                paging: false,
                sorting: true
            }}
        />
    )
}