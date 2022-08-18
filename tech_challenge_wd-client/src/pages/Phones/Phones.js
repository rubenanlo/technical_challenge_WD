import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Phones.css";

function Phones() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/phones`)
      .then((response) => setPhones(response.data))
      .catch((error) => error);
  }, []);

  return (
    <>
      {phones.length === 0 ? (
        <>
          <p>loading....</p>
        </>
      ) : (
        <div className="list">
          {phones?.map((phone) => {
            return (
              <NavLink to={`/phones/${phone.id}`}>
                <div key={phone.id} className="phone">
                  <img src={`../../${phone.imageFileName}`} alt="phone" />
                  <h3>{phone.name}</h3>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Phones;
