import './App.css';
import { useState, useEffect } from "react";
import Axios from 'axios';

function App() {
  const [listOfUsers, setListOfUsers]= useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    })
  }, [])

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {name, email})
      .then((response) => {
        setListOfUsers([...listOfUsers, {name, email}])
      })
  }

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((u) => {
          return (
          <div id={u.name + "_ID"}>
            <h1 id={u.name + "_inner_ID"}>Name: {u.name}</h1>
            <h1 id={u.email + "_ID"}>Email: {u.email}</h1>
          </div>
          )})}
      </div>
      <div>
        <input type="text" placeholder="Name..." onChange={(event) => {setName(event.target.value)}} />
        <input type="text" placeholder="Email..." onChange={(event) => {setEmail(event.target.value)}} />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
