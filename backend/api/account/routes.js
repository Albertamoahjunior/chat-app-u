const controller = require("./controller");
const {Router} = require("express");


router = Router();


router.post('/create', controller.create_account);
router.post('/login', controller.account_login);
router.get('/check-status', controller.account_status)

module.exports = router;

