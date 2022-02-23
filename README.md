# Node-Express
<h1>Get tracks</h1>


1. GET /tracks -> dohvaća sve pjesme 
2. GET /tracks/:id -> dohvaća pjesmu po id-ju 
3. GET /tracks/sorted -> preko query parametra sortBy prima name ili duration i na temelju toga vraća sortiranu tracks listu 
<a href="url">(http://localhost:3000/sorted?sortBy=name</a> ili <a href="url">(http://localhost:3000/sorted?sortBy=duration)</a>
 

Za dohvaćanje podataka koristen json file tracksDB.json 

 <img src="https://www.quantexdigital.com/wp-content/uploads/2021/11/nodejs-2048x1075.png" width="900" height="400" alt="Node logo"> 
 
 1. GET / tracks -> retrieves all songs
2. GET / tracks /: id -> retrieves the song by id
3. GET / tracks / sorted -> by name query parameter sortBy receives name or duration and based on that returns sorted tracks list
<a href="url">(http://localhost:3000/sorted?sortBy=name</a> or <a href="url">(http://localhost:3000/sorted?sortBy=duration)</a>

tracksDB.json was used to retrieve the data
