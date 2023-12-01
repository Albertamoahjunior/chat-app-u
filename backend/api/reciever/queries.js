const check_messages = "select * from message where reciever = $1";
const check_new_messages = "select * from message where reciever = $1 and id > $2"
const change_status = "update message set status = 'delivered' where reciever = $1" // make changes to reflect changes in database



module.exports = {
    check_messages,
    change_status,
    check_new_messages,
}