import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName ] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('http://127.0.0.1:8000/employee')
    .then( response => {
      // console.log(response);
      return response.json();
    }).then(data => {
      console.log("data", data)
      setData(data)
    })
    .catch(err => console.log("err", err))
  }

  const onRemoveHandler = (id) => {
    axios.post('http://127.0.0.1:8000/remove', {employeeId: id}).then(res => {
      console.log("res", res);
      if(res.status){
        getData()
      }

    }).catch(err => console.log(err))
  }

  const onSearchHandler = (value) => {
    console.log("value", value);
    axios.post('http://127.0.0.1:8000/search', {text: value}).then(res => {
      console.log("res", res);
      if(res.data.status){
        setData(res.data.result)
      }

    }).catch(err => console.log(err))
  }

  const addEmployee = () => {

    let params = {
      firstName: firstName,
      lastName: lastName,
      city: city
    }
    axios.post('http://127.0.0.1:8000/addEmployee', params).then(res => {
      console.log("res", res);
      if(res.data.status){
        getData()
        setFirstName("")
        setLastName("")
        setCity("")
      }

    }).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Hi</h1>
  
      <input type='text' onChange={(event) => onSearchHandler(event.target.value)} placeholder='Search here...' />
      <table>
      <tbody id="data">
        <tr>
          <th style={{paddingRight: 20}}>Eid</th>
          <th style={{paddingRight: 20}}>First Name</th>
          <th style={{paddingRight: 20}}>Last Name</th>
          <th style={{paddingRight: 20}}>City</th>
          <th style={{paddingRight: 20}}>Action</th> 
        </tr>

      {data?.length > 0 && data?.map(item => (
        <tr>
          <td style={{paddingRight: 20}}>{item.id}</td>
          <td style={{paddingRight: 20}}>{item.firstname}</td>
          <td style={{paddingRight: 20}}>{item.lastname}</td>
          <td style={{paddingRight: 20}}>{item.city}</td>
          <button style={{backgroundColor: "red", border: 0, borderRadius: 4}} onClick={() => onRemoveHandler(item.id)}>Remove</button>
        </tr>
      ))}

        <tr>
          <td style={{paddingRight: 20}}>{}</td>
          <td style={{paddingRight: 20}}><input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/></td>
          <td style={{paddingRight: 20}}><input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/></td>
          <td style={{paddingRight: 20}}><input type='text' value={city} onChange={(e) => setCity(e.target.value)}/></td>
          <button style={{backgroundColor: "green", border: 0, borderRadius: 4, width: 60}} onClick={() => addEmployee()}>Add</button>
        </tr>
      </tbody>
  
      </table>
    </div>
  );
}

export default App;
