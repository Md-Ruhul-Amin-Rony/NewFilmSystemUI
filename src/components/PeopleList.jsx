







import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddToNewGenreForm from './AddToNewGenre';
import AddMovieForm from './AddMovieForm';
import AddRatingForm from './AddRatingForm';
import AddPersonForm from './AddPersonForm';
import AddGenreForm from './AddGenreForm';


const Header = styled.header`
  background-color: #bfe017;
  color: #0c0c0c;
  padding: 20px;
  text-align: center;
`;

const Introduction = styled.p`
  margin: 0;
  font-size: 18px;
`;

const PeopleListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const PersonBox = styled.div`
  background-color: #e41f1f;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const PersonName = styled.h3`
  margin: 0;
`;

const PersonEmail = styled.p`
  margin: 10px 0 0;
`;

const PersonDetailsContainer = styled.div`
  background-color: #e2cb16;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  position: relative; /* Added position relative */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;




const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    // access data from the API endpoint
    axios
      .get('https://localhost:7146/Person/GetAllPeopleDetails')
      .then((response) => {
        // Update the state with the accessed data
        setPeople(response.data);
      })
      .catch((error) => {
        console.error('Accessing data Error:', error);
      });
  }, []);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseButtonClick = () => {
    setSelectedPerson(null);
  };

  if (people.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header>
        <h1>People List</h1>
        <Introduction>Click on a person to view details</Introduction>
      </Header>
      {/* Add Person Form */}
      <AddPersonForm/>
      {/* Add Genre Form */}
      <AddGenreForm/>
  {/* People list */}
      <PeopleListContainer>
        {people.map((person) => (
          <PersonBox key={person.personId} onClick={() => handlePersonClick(person)}>
            <PersonName>{person.name}</PersonName>
            <PersonEmail>{person.email}</PersonEmail>
          </PersonBox>
        ))}
      </PeopleListContainer>
 {/* Display selected person details */}
      {selectedPerson && (
        <PersonDetailsContainer>
          <CloseButton onClick={handleCloseButtonClick}>Close</CloseButton>
          <h2>{selectedPerson.name}</h2>
          <p>{selectedPerson.email}</p>
          {selectedPerson.genres && (
            <div>
              <h3>Genres:</h3>
              <ul>
                {selectedPerson.genres.map((genre) => (
                  <li key={`${selectedPerson.personId}-${genre.id}`}>{genre.id}.{genre.title}</li>
                ))}
              </ul>
            </div>
          )}

          <AddToNewGenreForm personId={selectedPerson.personId} />
          {/* //So that while user click to one person then that personId is activated for rest of the functions related to that person.  */}
          
        {/* Display person's movies */}
          {selectedPerson.movies && (
            <div>
              <h3>Movies:</h3>
              <ul>
                {selectedPerson.movies.map((movie) => (
                  <li key={`${selectedPerson.personId}-${movie.id}`}>{movie.link} - Rating: {movie.ratings !== null ? movie.ratings : "null"}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Add movie form for the selected person */}
          <AddMovieForm personId={selectedPerson.personId} />
          <AddRatingForm personId={selectedPerson.personId} />
        </PersonDetailsContainer>
      )}
    </div>
  );
};

export default PeopleList;
