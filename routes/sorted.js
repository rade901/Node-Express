import express from "express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const data = require("../tracksDB.json");

const router = express.Router();

router.route('/sorted').get((req, res) =>{
   
   let sortBy = data.sort((a, b) => {
      if (a.title < b.title) {
         return -1;
      }
      if (a.title > b.title) {
         return 1;
      }
      return 0;
       
   });
   res.send(sortBy);
});

    





export default router;