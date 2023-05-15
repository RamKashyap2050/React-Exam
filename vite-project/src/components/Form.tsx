import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Results from "./Results";
import { Alert } from "react-bootstrap";
const Form = () => {
  const [results, setResults] = useState(false);
  const navigate = useNavigate();

  const onsubmit = async (e: { preventDefault: () => void }) => {
    console.log(fullname, email, Organization, Organizationalunit, Locality, selectedCountry, telephone )
    e.preventDefault();
    console.log("Submitted");
    await navigate("/results", { state: formData });

    setResults(true);
  };
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [Organization, setOrganization] = useState("");
  const [Organizationalunit, setOrganizationalUnit] = useState("");
  const [Locality, setLocality] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [telephone, setTelephone] = useState("");
  const [Alert, setAlert] = useState(false)
  const formData = {
    fullname,
    email,
    organization: Organization,
    organizationalunit: Organizationalunit,
    locality: Locality,
    country: selectedCountry,
    telephone,
  };
  return (
    <div className="form-group">
      <h4 className="heading">DigiAccess Certificate Request</h4>
      <br />
      <br />
      <br />
      <h6>
        For an Indivudual Digi-Access Certifcate, Complete the following form
      </h6>
      <br />
      <br />
      <form onSubmit={onsubmit}>
        <div className="form">
          <label>Full Name</label>&nbsp;&nbsp;&nbsp;
          <input
            className="w-50"
            placeholder="Enter Full Name"
            type="text"
            required
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          ></input>
          <button className="btn btn-primary">Help</button>
        </div>
        <div className="form">
          <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="w-50"
            placeholder="Enter your Email"
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <button className="btn btn-primary">Help</button>
        </div>
        <div className="form">
          <label>Organization</label>&nbsp;
          <input
            className="w-50"
            placeholder="Enter Organization"
            type="text"
            required
            onChange={(e) => {
              setOrganization(e.target.value);
            }}
          ></input>
          <button className="btn btn-primary">Help</button>
        </div>
        <div className="form">
          <label>Organizational Unit</label>
          <input
            className="w-50"
            placeholder="Enter Organizational Unity"
            type="text"
            required
            onChange={(e) => {
              setOrganizationalUnit(e.target.value);
            }}
          ></input>
          <button className="btn btn-primary">Help</button>
        </div>
        <div className="form">
          <label>Locality/City</label>&nbsp;&nbsp;&nbsp;
          <input
            className="w-50"
            placeholder="Enter Locality/City"
            type="text"
            required
            onChange={(e) => {
              setLocality(e.target.value);
            }}
          ></input>
          <button className="btn btn-primary">Help</button>
        </div>
        <div className="form">
          <label>Country</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            className="w-50"
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
          </select>
          <button className="btn btn-primary">Help</button>
        </div>
        <div className="form">
          <label>Telephone</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="w-50"
            placeholder="Enter Telephone Number"
            type="number"
            required
            onChange={(e) => setTelephone(e.target.value)}
          ></input>
          <button className="btn btn-primary">Help</button>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block w-75 mx-auto"
        >
          Enroll Now
        </button>
      </form>
      {results && (
        <Results
          fullname={fullname}
          email={email}
          organization={Organization}
          organizationalunit={Organizationalunit}
          locality={Locality}
          country={selectedCountry}
          telephone={telephone}
        />
      )}
       
    </div>
  );
};

export default Form;
