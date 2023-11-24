const controller = require("./controller");
const {Router} = require("express");


router = Router();


router.post('/create', controller.create_account);
router.post('/login', controller.account_login);

module.exports = router;

