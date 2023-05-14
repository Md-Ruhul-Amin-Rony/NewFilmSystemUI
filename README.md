# NewFilmSystemUI


The FilmPeopleList  App is a web application that allows users to view and manage a list of people, their genres, movies, and ratings.

## Features

- Display a list of people with their names and emails.
- View person details, including their associated genres, movies, and ratings.
- Create a new person to the list.
- Create a new Genre to the list.
- Add a new genre to a specific person.
- Add a new movie to a specific person.
- Add a rating to a specific movie associated with a person.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router: Library for routing in a React application.
- Axios: Promise-based HTTP client for making API requests.
- Styled Components: Library for styling React components with CSS-in-JS.




## API Endpoints

- `GET /Person/GetAllPeopleDetails`: Get all people details.
- `POST /Person/Add`: Add a new person.
- `POST /Person/AddToNewGenre`: Add a new genre to a person.
- `POST /Person/Add/Movie`: Add a new movie to a person.
- `POST /Person/Add/MovieRatings`: Add a rating to a movie.

## Backend Configuration

To connect the frontend app with the backend API, you need to configure the backend server. Here are the steps:

1. Open the backend code in C#.("https://github.com/Md-Ruhul-Amin-Rony/FilmSystemAPIUsingRepositoryPattern.git")
2. Set up the database connection and ensure it's running.
3. Build and run the backend server.

Make sure the backend server is running and accessible at the appropriate URL. Update the API endpoint URLs in the frontend code (`axios.post` and `axios.get`) to match the backend server's address.