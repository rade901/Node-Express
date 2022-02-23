import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// require("../tracksDB.json");
const tracksID = require("../tracksDB.json");


const router = express.Router();

// route to get tracks by id
router.get("/tracks/:id", (req, res) => {
    res.send(tracksID.find(track => track.id === parseInt(req.params.id)));
 });

export default router;