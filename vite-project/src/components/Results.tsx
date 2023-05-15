import React from 'react';

interface Props {
  fullname: string;
  email: string;
  organization: string;
  organizationalunit: string;
  locality: string;
  country: string;
  telephone: string;
}

const Results = (props: Props) => {
  const { fullname, email, organization, organizationalunit, locality, country, telephone } = props;

  console.log("It is in results", fullname, email, organization, organizationalunit, locality, country, telephone);

  return (
    <div>
      <h1>I am Results</h1>
      <p>Full Name: {fullname}</p>
      <p>Email: {email}</p>
      <p>Organization: {organization}</p>
      <p>Organizational Unit: {organizationalunit}</p>
      <p>Locality/City: {locality}</p>
      <p>Country: {country}</p>
      <p>Telephone: {telephone}</p>
    </div>
  );
};

export default Results;

