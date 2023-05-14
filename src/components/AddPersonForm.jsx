import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  background-color: #e2cb16;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #2c14e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddPersonForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the API endpoint
    axios
      .post('https://localhost:7146/Person/Add', {
        name,
        email,
      })
      .then((response) => {
        // Handle the response
        console.log(response.data);
        // Reset the input fields
        setName('');
        setEmail('');
        // Show success message
        setSuccessMessage('Person added successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error adding person:', error);
        // Show error message
        setErrorMessage('Failed to add person');
        setSuccessMessage('');
      });
  };

  return (
    <FormContainer>
      <h3>Create New Person</h3>
      <form onSubmit={handleSubmit}>
        <FormLabel>Name:</FormLabel>
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel>Email:</FormLabel>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {successMessage && <div>{successMessage}</div>}
        {errorMessage && <div>{errorMessage}</div>}
        <FormButton type="submit">Add Person</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddPersonForm;
