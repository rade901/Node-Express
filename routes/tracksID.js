import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// require("../tracksDB.json");
const data = require("../tracksDB.json");


const router = express.Router();

// route to get tracks by id
router.get("/tracks/:id", (req, res) => {
    res.status(200).send(data.find(track => track.id === parseInt(req.params.id)));
 });

export default router;