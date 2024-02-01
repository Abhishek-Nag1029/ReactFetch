import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";
import { fetchCars } from "./request";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    const getCars=async()=>{
      try {
        const cars=await fetchCars();
        console.log("cars",cars);    
      } catch (error) {
        console.log(error);
      }
    }
    getCars();
  },[])

  return (
    <div className="App">
      <div className="tittle">
        <h3 className="title">React Fetch Using Jsonplaceholder</h3>
      </div>
      <div className="card">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
