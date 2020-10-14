import React, {Component} from 'react';
import SeachBox from './SearchBox';
import List from './employeeList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {name: "Dwight Schrute", email: "Dwight_Schrute@office.ca", phone: "(477) 555-4284", dob: "9-18-89"},
        {name: "John Krasinski", email: "John_Krasinski@office.ca", phone: "(481) 555-6218", dob: "8-15-80"},
        {name: "Jenna Fischer", email: "Jenna_Fischer@office.ca", phone: "(132) 555-3474", dob: "1-8-85"},
        {name: "Leslie David Baker", email: "Leslie_David_Baker@office.ca", phone: "(854) 555-6137", dob: "7-23-83"},
        {name: "Brian Baumgartner", email: "Brian_Baumgartner@office.ca", phone: "(663) 555-5877", dob: "1-16-90"},
        {name: "Angela Kinsey", email: "Angela_Kinsey@office.ca", phone: "(561) 555-1436", dob: "7-11-81"},
        {name: "Phyllis Smith", email: "Phyllis_Smith@office.ca", phone: "(244) 555-8815", dob: "2-28-82"},
        {name: "Kate Flannery", email: "Kate_Flannery@office.ca", phone: "(863) 555-6356", dob: "8-27-88"},
        {name: "Creed Bratton", email: "Creed_Bratton@office.ca", phone: "(227) 555-4366", dob: "8-22-87"},
        {name: "Oscar Nuñez", email: "Oscar_Nuñez@office.ca", phone: "(864) 555-3546", dob: "7-27-89"},
        {name: "B.J. Novak", email: "B.J._Novak@office.ca", phone: "(677) 555-7762", dob: "4-13-89"},
        {name: "Mindy Kaling", email: "Mindy_Kaling@office.ca", phone: "(651) 555-3368", dob: "6-7-90"},
        {name: "Ed Helms", email: "Ed_Helms@office.ca", phone: "(774) 555-8831", dob: "6-6-82"}                  
      ],
      serachEmployee: ''
    }
  }

  handleInput = (e) => {
    console.log(e.target.value)
    this.setState({ serachEmployee: e.target.value })
  }

  render() {
    let filteredEmployees = this.state.employees.filter((employee) => {
      return employee.name.toLowerCase().includes(this.state.serachEmployee.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Employee Directory</h1>
        <SeachBox handleInput={this.handleInput}/>
        <List filteredEmployees={filteredEmployees}/>
      </div>
    );
  }
}

export default App;
