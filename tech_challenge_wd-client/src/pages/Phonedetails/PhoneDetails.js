import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PhoneDetails.css";

function PhoneDetails() {
  const [phone, setPhone] = useState("");
  const { phoneId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/phones/${phoneId}`)
      .then((response) => {
        const phoneDetails = response.data;
        setPhone(phoneDetails);
      })
      .catch((error) => error);
  }, [phoneId]);

  return (
    <>
      {!phone ? (
        <>
          <p>loading....</p>
        </>
      ) : (
        <div className="phone-all-details">
          <img src={`../../${phone.imageFileName}`} alt="phone" />
          <h1>{phone.name}</h1>
          <p>Brand: {phone.manufacturer}</p>
          <p>Price: {phone.price}</p>
          <p>Color: {phone.color}</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>RAM: {phone.ram}</p>
          <p> {phone.description}</p>
        </div>
      )}
    </>
  );
}

export default PhoneDetails;
