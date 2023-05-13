







import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddToNewGenreForm from './AddToNewGenre';


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
  background-color: #df3b3b;
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

// const PeopleList = () => {
//   const [people, setPeople] = useState([]);
//   const [selectedPerson, setSelectedPerson] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API endpoint
//   axios
//   .get('https://localhost:7146/Person/GetAllPeopleDetails')
//   .then((response) => {
//     // Update the state with the fetched data
//     setPeople(response.data);
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error);
//   });
// }, []);

//   const handlePersonClick = (person) => {
//     setSelectedPerson(person);
//   };

//   const handleCloseButtonClick = () => {
//     setSelectedPerson(null);
//   };

//   if (people.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Header>
//         <h1>People List</h1>
//         <Introduction>Click on a person to view details</Introduction>
//       </Header>
      
//       <PeopleListContainer>
//         {people.map((person) => (
//           <PersonBox key={person.personId} onClick={() => handlePersonClick(person)}>
//             <PersonName>{person.name}</PersonName>
//             <PersonEmail>{person.email}</PersonEmail>
//           </PersonBox>
//         ))}
//       </PeopleListContainer>
//       {selectedPerson && (
//         <PersonDetailsContainer>
//           <CloseButton onClick={handleCloseButtonClick}>Close</CloseButton> {/* Moved the CloseButton inside PersonDetailsContainer */}
//           <h2>{selectedPerson.name}</h2>
//           <p>{selectedPerson.email}</p>
//           {selectedPerson.genres && (
//             <div>
//               <h3>Genres:</h3>
//               <ul>
//                 {selectedPerson.genres.map((genre) => (
//                   <li key={`${selectedPerson.PersonId}-${genre.id}`}>{genre.title}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           <AddToNewGenreForm/>
//           {selectedPerson.movies && (
//             <div>
//               <h3>Movies:</h3>
//               <ul>
//                 {selectedPerson.movies.map((movie) => (
//                   <li key={`${selectedPerson.PersonId}-${movie.id}`}>{movie.link} - Rating: {movie.ratings !==null? movie.ratings : "null"}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </PersonDetailsContainer>
//       )}
//     </div>
//   );
// };

// export default PeopleList;


const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get('https://localhost:7146/Person/GetAllPeopleDetails')
      .then((response) => {
        // Update the state with the fetched data
        setPeople(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
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

      <PeopleListContainer>
        {people.map((person) => (
          <PersonBox key={person.personId} onClick={() => handlePersonClick(person)}>
            <PersonName>{person.name}</PersonName>
            <PersonEmail>{person.email}</PersonEmail>
          </PersonBox>
        ))}
      </PeopleListContainer>

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
                  <li key={`${selectedPerson.personId}-${genre.id}`}>{genre.title}</li>
                ))}
              </ul>
            </div>
          )}

          <AddToNewGenreForm personId={selectedPerson.personId} />

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
        </PersonDetailsContainer>
      )}
    </div>
  );
};

export default PeopleList;
