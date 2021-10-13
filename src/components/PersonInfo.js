import React from "react";

const PersonInfo = ({ img, alt, name, birthYear }) => {
  const currentYear = new Date().getFullYear();
  const getAge = (birthYear) => {
    return currentYear - birthYear + " years";
  };
  return (
    <div className="person-info">
      <img src={img} alt={alt} />
      <h2>
        <b>{name}</b>
      </h2>
      <p className="text-black-50">{getAge(birthYear)}</p>
    </div>
  );
};

export default PersonInfo;
