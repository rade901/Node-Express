import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// require("../tracksDB.json");
const data = require("../tracksDB.json");



const router = express.Router();

// route to get a all tracks
router.get("/tracks", (req, res) => {
   res.status(200).send(data);
});

export default router;