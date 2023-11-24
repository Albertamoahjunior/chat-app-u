const controller = require("./controller");
const {Router} = require("express");

router = Router();


router.post('/send', controller.send_message);
router.get('/check/:reciever', controller.check_message_status);


module.exports = router;