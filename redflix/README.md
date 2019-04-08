# RedFlix

Check out the live app [here](https://red-flex.herokuapp.com/#/).

Redflix is a single-page Netflix clone web-application, inspired by my love of Russian and Soviet cinema. It uses Rails and Postgres on the backend and React/Redux on the frontend.

This project was built in two weeks, although I plan to improve it further more and add more features.

#Features 

### Authentication

* Password digest using BCrypt.

* Session token refresh on every sign in and sign out.

### Watch movies 

* Users can watch movies 

* Users can watch movie trailers on the browse page

### Searching and Browsing movies 

* Users can browse movies by genres

* Users can search movies by titles 

### My List 

* User have their lists

* Users can add and remove movies to their list

# Technical solutions

###  Organizing data

* Movies and Genres are connected by movie-lists joins table.
* Acitve Records assosiations are establish to enable fetching all the movies belonging to the specific genre and all the genres belonging to the specific movie.
![Image description]("./app/assets/images/movie-assosiations.png")
* Movie-lists table has sample-movie boolean column which is designed to avoiding fetch every movie in the database when populating the main page with genres. 
![Image description]("./app/assets/images/sample_movies.png").
* Active Storage is used to store movie poster and videos. Active Storage assosiaction are defined in a way to enable eager loading in the conrtollers. 
![Image description]("./app/assets/images/active-storage.png").
* Additionally actors and castings tables are established with according Acrtive Record assosiactions to add movie cast feature to movies (this part is realized only on the backend level due to the time constraints). 

### Routes and controllers 
* Following routes are established to manage MVC model. 
![Image description]("./app/assets/images/routes.png"). 
* User and Session controllers take care of signing up, in and out user.
* Genres controller is responsible for populating the browse with movies. It uses index method to get all the genres and sample movies thay belong to that genre and show method to get all the movies belonging the specifi genre. Both methods use Active Records 'includes' and Active Storage 'with_attached' methods to enable eager loading and avoid n+1 db queries. 
![Image description]("./app/assets/images/genres-controller.png")
* Movies controller has create and delete methods which handle adding and removig movies from the user's watchlist, and show method which is responsible for fetching the movie user is going to watch. 
![Image description]("./app/assets/images/movies-controller.png")

### Redux state and logic 
* The state consists of the follwing slices. 
![Image description]("./app/assets/images/state.png")
* session slice handles with user auth concerns. 
* entities slice translates the db structure to the FrontEnd level. 
![Image description]("./app/assets/images/entities.png")
* errors slice handles delivering session errors to the user. 
* dropDownMovie slice handles logic nessecary to provide dropdown movie-window feature in the movie-list carousels. 
* mainMovie slice contains the main movie_id that is displayed on top of every genre. 
* search slice contains the searhc phrase provided by the user is responsible for handle the logic of reorganizing web-application structre when the user is searching for something. 

### Frontend routes and structure
* The app has the following main structure 
![Image description]("./app/assets/images/entities.png")
* Protected and Auth routes are utilized to control users access to the app's components. 
* MoviePlayContainer display the movie according to the :moveId param. 
![Image description]("./app/assets/images/movie-display.png")
* GenreIndexContainer either renders the home page if the :genreId param is empty 
![Image description]("./app/assets/images/main-page.png")
 or the specific genres if it's not. 
 ![Image description]("./app/assets/images/genre-page.png")

### Some of React components 
* The app heavily relies on React to create an engaging and interactive frontend. 
* The main components are broken down into smaller ones. Like GenreIndexContainer includes GenreIndexItems,  which in their turn include MovieListItems.
![Image description]("./app/assets/images/genre-index-item.png")
*  Those Lists represent movies of the specifiv genres organized in a carousel style. 
![Image description]("./app/assets/images/carousel.png").
* Background posters for each movie are extracting from Active Storage, passed down the props and are used for styling directly from inside the React Component.
![Image description]("./app/assets/images/background-photo-style.png").










* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
