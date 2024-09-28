import React from "react";
import SearchBox from "./ui/SearchBox";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const names = ["Bob", "Charlie", "Sudarshan", "Om"];

  const personData = [
    { name: "Bob", age: 29 },
    { name: "Eva", age: 33 },
    { name: "Alice", age: 21 },
    { name: "Charlie", age: 40 },
    { name: "David", age: 19 },
  ];

  return (
    <React.Fragment>
      {names.map((name, index) => {
        return (
          <div key={index}>
            {" "}
            <SearchBox name={name} />
          </div>
        );
      })}

      <div>
        {personData?.map((person, index) => {
          let devision = "A";
          return (
            <div key={index}>
              <span className="text-red-600"> Name : {person.name} </span>
              <span className="text-blue-600"> Age : {person.age}</span>
              <span className="text-yellow-600"> Devision : {devision}</span>
            </div>
          );
        })}
      </div>

      <button onClick={() => navigate("/")}>Navigate to App page</button>

      {/* <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul> */}
    </React.Fragment>
  );
};

export default About;
