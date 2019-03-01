# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.create(name: "My List")
Genre.create(name: "Trending Now")
Genre.create(name: "New Releases")
Movie.create(title: "Andrei Rublev", description: "Andrei Rublev is set against the background of 15th-century Russia. Although the film is only loosely based on the life of Andrei Rublev, it seeks to depict a realistic portrait of medieval Russia. Tarkovsky sought to create a film that shows the artist as a world-historic figure and Christianity as an axiom of Russia’s historical identity.", year: 1969, maturity_rating: "R")
Movie.create(title: "Stalker", description: "The film depicts an expedition led by a figure known as the 'Stalker' to take his two clients—a melancholic writer seeking inspiration, and a professor seeking scientific discovery—to a mysterious restricted site known simply as the 'Zone', where there supposedly exists a room which grants a person's innermost desires. The trio travel through unnerving areas filled with the debris of modern society while engaging in many arguments.", year: 1979, maturity_rating: "PG13")
Movie.create(title: "The Color of Pomegranates", description: "The Color of Pomegranates is a biography of the Armenian ashug Sayat-Nova (King of Song) that attempts to reveal the poet's life visually and poetically rather than literally. The film is presented with little dialogue using active tableaux which depict the poet's life in chapters: Childhood, Youth, Prince's Court (where he falls in love with a tsarina), The Monastery, The Dream, Old Age, The Angel of Death and Death.", year: 1969, maturity_rating: "PG13")
MovieList.create(movie_id: 1, genre_id: 2)
MovieList.create(movie_id: 1, genre_id: 3)
MovieList.create(movie_id: 2, genre_id: 2)
MovieList.create(movie_id: 2, genre_id: 3)
MovieList.create(movie_id: 3, genre_id: 3)
Actor.create(first_name: "Andrei", last_name: "Tarkovsky")
Actor.create(first_name: "Sergei", last_name: "Parajanov")
Actor.create(first_name: "Anatoly", last_name: "Solonitsyn")
Actor.create(first_name: "Alexander", last_name: "Kaidanovsky")
Actor.create(first_name: "Sofiko", last_name: " Chiaureli")
Casting.create(movie_id: 1, actor_id: 1, ord: 0)
Casting.create(movie_id: 2, actor_id: 1, ord: 0)
Casting.create(movie_id: 3, actor_id: 2, ord: 0)
Casting.create(movie_id: 1, actor_id: 3, ord: 1)
Casting.create(movie_id: 2, actor_id: 4, ord: 1)
Casting.create(movie_id: 3, actor_id: 5, ord: 1)






