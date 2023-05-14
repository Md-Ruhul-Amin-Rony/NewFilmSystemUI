



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// const FormContainer = styled.div`
//   background-color: #e2cb16;
//   padding: 20px;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-top: 20px;
// `;

// const FormLabel = styled.label`
//   display: block;
//   margin-bottom: 10px;
// `;

// const FormInput = styled.input`
//   width: 100%;
//   padding: 5px;
//   border-radius: 3px;
//   border: 1px solid #ccc;
//   margin-bottom: 10px;
// `;

// const FormButton = styled.button`
//   padding: 10px 20px;
//   background-color: #dc4d4d;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// // const SuccessMessage = ({ message }) => {
// //   return <div className="success-message">{message}</div>;
// // };

// // const AddToNewGenreForm = ({ personId }) => {
// //   const [genreId, setGenreId] = useState('');
// //   const [error, setError] = useState(null);
// //   const [successMessage, setSuccessMessage] = useState(null);


  
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
  
// //     // Validate the input value
// //     if (!genreId) {
// //       setError('Please enter Genre ID');
// //       return;
// //     }
  
// //     // Reset the error state
// //     setError(null);
  
// //     // Send a POST request to the API endpoint
// //     axios
// //       .post('https://localhost:7146/Person/AddToNewGenre', {
// //         PersonId: personId,
// //         GenreId: genreId,
// //       })
// // //       
  

// // .then((response) => {
// //     // Handle the response
// //     console.log(response.data);
// //     // Reset the input fields
// //     setTitle('');
// //     setDescription('');
// //     // Show success message
// //     setSuccessMessage('Genre added successfully!');
// //     setErrorMessage('');
// //   })
// //   .catch((error) => {
// //     console.error('Error adding genre:', error);
// //     // Show error message
// //     if (error.response && error.response.data && error.response.data.message) {
// //       setErrorMessage(error.response.data.message);
// //     } else {
// //       setErrorMessage('Failed to add genre');
// //     }
// //     setSuccessMessage('');
// //   });
// // };


// //   return (
// //     <FormContainer>
// //       <h3>Add Genre to Person</h3>
// //       <form onSubmit={handleSubmit}>
// //         <FormLabel>Genre ID:</FormLabel>
// //         <FormInput type="text" value={genreId} onChange={(e) => setGenreId(e.target.value)} />
// //         {error && <ErrorMessage>{error}</ErrorMessage>}
// //         {successMessage && <SuccessMessage message={successMessage} />}
// //         <FormButton type="submit">Add Genre</FormButton>
// //       </form>
// //     </FormContainer>
// //   );
// // };

// // export default AddToNewGenreForm;



// const SuccessMessage = ({ message }) => {
//     return <div className="success-message">{message}</div>;
//   };
  
//   const AddToNewGenreForm = ({ personId }) => {
//     const [genreId, setGenreId] = useState('');
//     const [error, setError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState(null);
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       // Validate the input value
//       if (!genreId) {
//         setError('Please enter Genre ID');
//         return;
//       }
  
//       // Reset the error state
//       setError(null);
  
//       // Send a POST request to the API endpoint
//       axios
//         .post('https://localhost:7146/Person/AddToNewGenre', {
//           PersonId: personId,
//           GenreId: genreId,
//         })
//         .then((response) => {
//           // Handle the response
//           console.log(response.data);
  
//           // Check if the response contains an error message
//           if (response.data.error) {
//             setError(response.data.error);
//             setSuccessMessage(null);
//           } else if (response.data.alreadyAdded) {
//             // Show message when the genre is already added
//             setError(null);
//             setSuccessMessage('Genre is already added to this person!');
//           } else {
//             // Reset the input field and show success message
//             setGenreId('');
//             setError(null);
//             setSuccessMessage('Genre added successfully!');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding genre to person:', error);
//           setError('An error occurred while adding genre to person');
//           setSuccessMessage('error adding genre');
//         });
//     };
  
//     return (
//       <FormContainer>
//         <h3>Add Genre to Person</h3>
//         <form onSubmit={handleSubmit}>
//           <FormLabel>Genre ID:</FormLabel>
//           <FormInput type="text" value={genreId} onChange={(e) => setGenreId(e.target.value)} />
//           {error && <ErrorMessage>{error}</ErrorMessage>}
//           {successMessage && <SuccessMessage message={successMessage} />}
//           <FormButton type="submit">Add Genre</FormButton>
//         </form>
//       </FormContainer>
//     );
//   };
  
//   export default AddToNewGenreForm;
  



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
  background-color: #dc4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: #2c18e1;
  margin-bottom: 10px;
`;

const SuccessMessage = ({ message }) => {
  return <div className="success-message">{message}</div>;
};

const AddToNewGenreForm = ({ personId }) => {
  const [genreId, setGenreId] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input value
    if (!genreId) {
      setError('Please enter Genre ID');
      return;
    }

    // Reset the error state
    setError(null);

    // Send a POST request to the API endpoint
    axios
      .post('https://localhost:7146/Person/AddToNewGenre', {
        PersonId: personId,
        GenreId: genreId,
      })
      .then((response) => {
        // Handle the response
        console.log(response.data);

        // Check if the response contains an error message
        if (response.data.error) {
          setError(response.data.error);
          setSuccessMessage(null);
        } else if (response.data.alreadyAdded) {
          // Show message when the genre is already added
          setError(null);
          setSuccessMessage('Genre is already added to this person!');
        } else {
          // Reset the input field and show success message
          setGenreId('');
          setError(null);
          setSuccessMessage('Genre added successfully!');
        }
      })
      .catch((error) => {
        console.error('Error adding genre to person:', error);
        setError('Maybe Genre is already added or invalid genreID');
        setSuccessMessage(null);
      });
  };

  return (
    <FormContainer>
      <h3>Add Genre to Person</h3>
      <form onSubmit={handleSubmit}>
        <FormLabel>Genre ID:</FormLabel>
        <FormInput type="text" value={genreId} onChange={(e) => setGenreId(e.target.value)} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage && <SuccessMessage message={successMessage} />}
        <FormButton type="submit">Add Genre</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddToNewGenreForm;
