require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const db = require('./db');

const app = express();


//middleware
app.use(express.json());


//get all users GET
app.get('/getUser', async (req, res) => {
    
    const result = await db.query('SELECT * FROM users')
    console.log(result);

    res.status(200).json({
        status: 'success',
        data: {
            emails: ['edvinfa@kth.se', 'desaulty@kth.se']
        }
        
    })
});

//get user
app.get('/getUser/:id', (req, res) => {
    console.log(req.params);
});

//Det vi kommer vilja ha som anrop är:
/*

    create user POST
    get user GET
    get all users GET   
    delete user DELETE
    eventuellt sätta user inaktiv PUT

*/

//node postgres is good to use

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
