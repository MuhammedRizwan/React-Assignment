import React, { useState, useEffect } from "react";
import axios from "axios";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userDetails, setDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetials = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        setDetails(res.data);
        setError(null);
      } catch (error) {
        setError(error.message || "fetching Error");
      } finally {
        setLoading(false);
      }
    };
    if (count > 0) {
      fetchUserDetials();
    }
  }, [count]);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error:{error}</p>
      ) : userDetails ? (
        <div>
          <h1>UserDetials</h1>
          <p>Name:{userDetails.name}</p>
          <p>Email:{userDetails.email}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
