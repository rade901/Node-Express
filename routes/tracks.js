import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../tracksDB.json");



const router = express.Router();

// route to get a all tracks
router.get("/tracks", (req, res) => {
   res.send(data);
});



export default router;