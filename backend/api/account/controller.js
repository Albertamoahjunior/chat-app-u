const pool = require("../db");
const queries = require("./queries");
const date = new Date().toJSON()


const account_login  = (req, res) =>{
    const {username }= req.body

    pool.query(queries.get_user, [username], (err, result)=>{
        if (err) throw err;
        if(result.rows.length){
            //login

        }else{
            res.status(401).json("not-allowed")
        }
    })
 }

 const account_status  = (req, res) =>{
    const {username} = req.body

    pool.query(queries.get_user, [username], (err, result)=>{
        if (err) throw err;
        if(result.rows.length){
            //check online or offline
            res.json(result.rows)

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
            //create a new user
            pool.query(queries.create_account, [username, phone_number, date, date], (err, result)=>{
                if(err) throw err;
                res.status(201).send("Account added Successfully")
            })
        }
    })
}


module.exports = {
    create_account,
    account_login,
    account_status,
}