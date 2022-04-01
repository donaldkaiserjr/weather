import React, { useState } from "react";
import "./UserForm.css";

function UserForm(props) {
  const [cityName, setCityName] = useState("");
  
  return (
    <div className="user__form" id="form">
      <input
        name="cityName"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && props.onSubmit(e.target.value)}
        type="text"
        id="search"
        placeholder="Search a city to get the weather"
      />
    </div>
  );
}

export default UserForm;
