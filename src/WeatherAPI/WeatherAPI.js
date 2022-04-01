import React, { useState } from "react";
import "../App.css";
import UserForm from "../UserForm/UserForm";
import ErrorMessage from "../ErrorMessages/ErrorMessage";
import Card from "../Card/Card"

function WeatherAPI() {
  const [apiResponse, setApiResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleChange(cityName) {
    fetch(`http://localhost:9000/weather/${cityName}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.cod && res.cod === "404") {
          setErrorMessage(res.message);
          setApiResponse(null);
        } else {
          setApiResponse(res);
          setErrorMessage(null)
        }
      });
  }
  return (
    <>
      <UserForm onSubmit={handleChange} /> 
      <Card
        temp={apiResponse?.main.temp}
        name={apiResponse?.name}
        feels_like={apiResponse?.main.feels_like}
      >
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </Card>
    </>
  );
}
export default WeatherAPI;
