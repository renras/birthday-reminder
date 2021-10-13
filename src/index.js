import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import listOfPeople from "./components/listofpeople";
import PersonInfo from "./components/PersonInfo";

const MyApp = () => {
  const [people, setPeople] = useState(listOfPeople);
  const [title, setTitle] = useState("5 birthdays today");
  const handleClick = () => {
    setPeople([]);
    setTitle("0 birthdays today");
  };
  const renderPeople = people.map((people) => {
    return <PersonInfo key={people.key} {...people} />;
  });
  return (
    <main className="bg-info">
      <section className="birthday-notification border border-light rounded-3 shadow bg-body">
        <h1>{title}</h1>
        {renderPeople}
        <button type="button" className="btn btn-info" onClick={handleClick}>
          Clear All
        </button>
      </section>
    </main>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
