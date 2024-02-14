const express = require("express");
const router = express.Router();
const Task = require("../models/task.js"); 


router.post("/create", async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a task" });
    }
});

module.exports = router;