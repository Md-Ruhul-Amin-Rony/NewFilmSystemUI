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
  background-color: #130ce1;
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

const AddRatingForm = ({ personId }) => {
  const [movieId, setMovieId] = useState('');
  const [rating, setRating] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate rating
    if (!rating || isNaN(rating) || rating < 1 || rating > 10) {
      setErrorMessage('Please enter a valid rating between 1 and 10');
      setSuccessMessage('');
      return;
    }

    // Send a POST request to the API endpoint
    axios
      .post('https://localhost:7146/Person/Add/MovieRatings', {
        MovieId: movieId,
        PersonId: personId,
        Rating: rating,
      })
      .then((response) => {
        // Handle the response
        console.log(response.data);
        // Reset the input fields
        setMovieId('');
        setRating('');
        // Show success message
        setSuccessMessage('Rating added successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error adding rating:', error);
        // Show error message
        setErrorMessage('Failed to add rating');
        setSuccessMessage('');
      });
  };

  return (
    <FormContainer>
      <h3>Add Rating to Movie</h3>
      <form onSubmit={handleSubmit}>
        <FormLabel>Movie ID:</FormLabel>
        <FormInput
          type="text"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
        />
        <FormLabel>Rating:</FormLabel>
        <FormInput
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormButton type="submit">Add Rating</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddRatingForm;
