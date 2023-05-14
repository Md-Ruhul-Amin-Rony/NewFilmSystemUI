import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  background-color: #a2d215;
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

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #1a2be6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddGenreForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the API endpoint
    axios
      .post('https://localhost:7146/Genre/Add', {
        title,
        description,
      })
      .then((response) => {
        // Handle the response
        console.log(response.data);
        // Reset the input fields
        setTitle('');
        setDescription('');
        // Show success message
        setSuccessMessage('Genre added successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error adding genre:', error);
        // Show error message
        setErrorMessage('Failed to add genre');
        setSuccessMessage('');
      });
  };

  return (
    <FormContainer>
      <h3>Add Genre</h3>
      <form onSubmit={handleSubmit}>
        <FormLabel>Title:</FormLabel>
        <FormInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormLabel>Description:</FormLabel>
        <FormTextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {successMessage && <div>{successMessage}</div>}
        {errorMessage && <div>{errorMessage}</div>}
        <FormButton type="submit">Add Genre</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddGenreForm;
