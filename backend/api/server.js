const express = require('express');

const app = express()

//declaration of routes
const accountRoute = require("./account/routes");
const senderRoute = require("./sender/routes");
const recieverRoute = require('./reciever/routes')
 
app.use(express.json())
// app.use((req, res, next) =>{
//     console.log(`$(req.method):$(req.url)`);
//     next();
// })


//routes usage
app.use('/api/v1/account/', accountRoute);
app.use('/api/v1/message-send/', senderRoute);
app.use('/api/v1/message-recieve/', recieverRoute)



app.listen(2000, (req, res)=>{
    console.log("We are live")
})