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
  background-color: #3216e5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;
 {/* //So that while user click to one person then that personId is activated for rest of the functions related to that person.  */}
const AddMovieForm = ({ personId }) => {
  const [genreId, setGenreId] = useState('');
  const [link, setLink] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the API endpoint
    axios
      .post('https://localhost:7146/Movie/Add', {
        GenreId: genreId,
        PersonId: personId,
        Link: link,
      })
      .then((response) => {
        // Handle the response
        console.log(response.data);
        // Reset the input fields
        setGenreId('');
        setLink('');
        // Show success message
        setSuccessMessage('Movie added successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
        // Show error message
        setErrorMessage('Failed to add movie');
        setSuccessMessage('');
      });
  };

  return (
    <FormContainer>
      <h3>Add Movie to Person</h3>
      <form onSubmit={handleSubmit}>
        <FormLabel>Genre ID:</FormLabel>
        <FormInput
          type="text"
          value={genreId}
          onChange={(e) => setGenreId(e.target.value)}
        />
        <FormLabel>Link:</FormLabel>
        <FormInput
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormButton type="submit">Add Movie</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddMovieForm;
