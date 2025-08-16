const { Signup, Login} = require("../AuthController");
const{userVerification} = require ("../AuthMiddleware")
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/', userVerification)

module.exports = router;

