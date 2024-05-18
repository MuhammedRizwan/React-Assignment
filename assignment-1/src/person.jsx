import React from "react";
import './person.css'

const Person = (props) => {
  console.log(props);
  return props.list.map((item) => {
    return (
      <div className="person-name">
        <ul>
          <li>{item.name}</li>
          <li className="email">{item.email}</li>
        </ul>
      </div>
    );
  });
};

export default Person;
