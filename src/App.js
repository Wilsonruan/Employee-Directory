import React, {Component} from 'react';
import SeachBox from './SearchBox';
import employeeList from './employeeList';


class App extends Component () {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {name: "Dwight Schrute", email: "Dwight_Schrute@office.ca" },
        {name: "John Krasinski", email: "John_Krasinski@office.ca" },
        {name: "Jenna Fischer", email: "Jenna_Fischer@office.ca" },
        {name: "Leslie David Baker", email: "Leslie_David_Baker@office.ca" },
        {name: "Brian Baumgartner", email: "Brian_Baumgartner@office.ca" },
        {name: "Angela Kinsey", email: "Angela_Kinsey@office.ca" },
        {name: "Phyllis Smith", email: "Phyllis_Smith@office.ca" },
        {name: "Kate Flannery", email: "Kate_Flannery@office.ca" },
        {name: "Creed Bratton", email: "Creed_Bratton@office.ca" },
        {name: "Oscar Nuñez", email: "Oscar_Nuñez@office.ca" },
        {name: "B.J. Novak", email: "B.J._Novak@office.ca" },
        {name: "Mindy Kaling", email: "Mindy_Kaling@office.ca" },
        {name: "Ed Helms", email: "Ed_Helms@office.ca" }
      ],
      serachEmployee: ''
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Employee Directory</h1>
      </div>
    );
  }
}

export default App;
