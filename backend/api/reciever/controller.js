const pool = require("../db");
const queries = require("./queries");


const check_messages = (req, res) =>{
    const me = req.params.me

    pool.query(queries.check_messages, [me], (err, result)=>{
        if(err) throw err;
        res.status(200).json(result.rows)
    })
}

const check_new_messages = (req, res) =>{
    const me = req.params.me
    const id = req.params.id

    pool.query(queries.check_new_messages, [me, id], (err, result)=>{
        if(err) throw err;
        if(result.rows.length){
            res.status(200).json(result.rows)
        }
        else{
            res.status(200).json("empty")
        }
    })
}


module.exports = {
    check_messages,
    check_new_messages,
}