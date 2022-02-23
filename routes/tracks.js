import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// require("../tracksDB.json");
const tracks = require("../tracksDB.json");

const router = express.Router();

// route to get a all tracks
router.get("/tracks", (req, res) => {
  res.send(tracks);
});

export default router;
