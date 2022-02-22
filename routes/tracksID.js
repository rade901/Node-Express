import express from "express";

const router = express.Router();

router.get("/tracks/:id", (req, res) => {
    res.send("tracks ID");
});

export default router;