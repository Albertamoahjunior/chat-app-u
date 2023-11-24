const {Router} = require("express");
const controller = require("./controller");


router = Router();

//get all messages
router.get('/messages/:me', controller.check_messages);

//get new messages
router.get('/messages/:me/:id', controller.check_new_messages);




module.exports = router;