import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div>
          <img src={`../../${phone.imageFileName}`} alt="phone" />
          <p>{phone.name}</p>
          <p>{phone.manufacturer}</p>
          <p>{phone.price}</p>
          <p>{phone.color}</p>
          <p>{phone.screen}</p>
          <p>{phone.processor}</p>
          <p>{phone.ram}</p>
          <p>{phone.description}</p>
        </div>
      )}
    </>
  );
}

export default PhoneDetails;
