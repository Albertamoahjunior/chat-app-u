const pool = require("../db");
const queries = require("./queries");


const account_login  = (req, res) =>{
    const {username, phone_number} = req.body

    pool.query(queries.get_user, [username], (err, result)=>{
        if (err) throw err;
        if(result.rows.length){
            //login

        }else{
            res.status(401).json("not-allowed")
        }
    })
 }


const create_account = (req, res) =>{
    const {username, phone_number} = req.body

    pool.query(queries.get_user, [username], (err, result)=>{
        if(err) throw err;
        if(result.rows.length){
            //alert
            res.status(401).send("User already exist")
        }else{
            //create
            pool.query(queries.create_account, [username, phone_number], (err, result)=>{
                if(err) throw err;
                res.status(201).send("Account added Successfully")
            })
        }
    })
}


module.exports = {
    create_account,
    account_login,
}