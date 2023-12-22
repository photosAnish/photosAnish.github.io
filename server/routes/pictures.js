const express = require("express");
const path = require('path');
app.use(express.static(path.join(__dirname, '../client/dist')));

const router = express.Router();

router.get("/randomPicture", (req, res) => {
    // res.render("http://127.0.0.1:5173/");
});

module.exports = router;