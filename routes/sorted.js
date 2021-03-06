import express from "express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
// require("../tracksDB.json");
const sortB = require("../tracksDB.json");

const router = express.Router();

//route to sort by title
router.route("/sorted").get((req, res) => {
  // Function to sort the tracks by title

  const sortBy = req.query.sortBy;
  if (!sortBy) {
    res.send(sortB.sort());
  } else {
    const sorted = sortB.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
    res.send(sorted);
  }
});

export default router;
