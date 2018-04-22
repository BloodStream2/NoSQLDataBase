//db = connect("localhost:27017/films")

use films


db.film.insert({"title": "Gladiator", "year": 2000, "director": {
"first_name": "Ridley",
"last_name": "Scott2",
"birthdate": "1937-11-30"}})


db.film.find({"director.last_name": "Scott"})


 