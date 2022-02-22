import express from "express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sortB = require("../tracksDB.json");

const router = express.Router();

router.route('/sorted&sortBy=title').get((req, res) =>{
// Function to sort the tracks by title
      const sorted = sortB.sort((a, b) => {
         if (a.title < b.title) {
            return -1;
         }
         if (a.title > b.title) {
            return 1;
         }
         return 0;
         });
         res.send(sorted);
         
});
router.route('/sorted&sortBy=duration').get((req, res) =>{
   // Function to sort the tracks by duration
      const duration = sortB.sort((a, b) => {
         if (a.duration < b.duration) {
            return -1;
         }
         if (a.duration > b.duration) {
            return 1;
         }
         return 0;
         });
         res.send(duration);
    
});

    





export default router;