import express from "express";
import bodyParser from "body-parser";
import tracks from "./routes/tracks.js";
import tracksID from "./routes/tracksID.js";
import sorted from "./routes/sorted.js";


const app = express();

app.use(bodyParser.json());
//ROUTES
app.use('/', tracks);
app.use('/', tracksID);
app.use('/', sorted);


//PORT
app.listen(3000);