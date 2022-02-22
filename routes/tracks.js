import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../tracksDB.json");



const router = express.Router();



router.get("/tracks", (req, res) => {
   res.send(data);
});
router.get("/tracks/:id", (req, res) => {
   res.send(data.filter(track => track.id === parseInt(req.params.id)));
});


export default router;