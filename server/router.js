const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "Server is up and running",
  });
});

module.exports = router;
