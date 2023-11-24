const pool = require("../db");
const queries = require("./queries");



const send_message = (req, res) =>{
    const{sender, message, reciever, status} = req.body;

    //validate reciever

    pool.query(queries.send_message, [sender, message, reciever, status], (err, result)=>{
        if(err) throw err;
        res.status(200).send("message sent")
    })
}

//
const check_message_status = (req, res) =>{
    const reciever = req.params.reciever;

    pool.query(queries.check_message_status, [reciever], (err, result)=>{
        if(err) throw err;
        res.status(200).json(result.rows)
    })
}


module.exports = {
    send_message,
    check_message_status
}