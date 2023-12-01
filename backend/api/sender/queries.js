const send_message = "insert into message(sender, message, reciever, status) values($1, $2, $3, $4)";
const check_message_status = "select  *  from message where reciever = $1";



module.exports ={
    send_message,
    check_message_status,
}