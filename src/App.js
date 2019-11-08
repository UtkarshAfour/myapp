import React from 'react';
import './App.css';
import Table from './Table/Table';
import Accordian from './Accordian/Accordian';
import {useState} from 'react';

function App() {

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel  => {
    setExpanded(panel);
  };

  console.log(expanded);

  const columns = [
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "company",
     label: "Company",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "city",
     label: "City",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "state",
     label: "State",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
   const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
   ];
   const options = {
    filterType: 'checkbox',
  };
  
  return (
    <div className="App">
     
      <Accordian click={handleChange} expanded={expanded} title="Accordian Title 1" name="panel1"/>
      <Accordian click={handleChange} expanded={expanded} title="Accordian Title 2" name="panel2"/>
      <Accordian click={handleChange} expanded={expanded} title="Accordian Title 3"name="panel3"/>
    </div>
  );
}

export default App;



//<Table columns={columns} data ={data} options ={options}>

//</Table> 