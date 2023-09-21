const express = require("express");
const router = express.Router();
const {getAllUser,signUp}=require("../controllers/user-controllers");



router.get('/get-user',getAllUser);
router.post('/signup',signUp);

module.exports = router;