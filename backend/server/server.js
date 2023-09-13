require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const db = require('./db');

const app = express();


//middleware
app.use(express.json());


//get all users GET
app.get('/getUsers', async (req, res) => {

    try {
        const result = await db.query('SELECT * FROM users')
        res.status(200).json({
            status: 'success',
            results: result.rows.length,
            data: {
                users: result.rows
            }
            
        })
        console.log(result);

    } 
    catch (err) {
        console.log(err);
    }
    
    
    
    
});

//get specific user
//Denna borde man kanske göra om till att hämta från hashen
app.get('/getUser/:email', async (req, res) => {
    console.log(req.params.email);
    try {
        const result = await db.query(`SELECT * FROM users WHERE email = $1`, [req.params.email])
        console.log(result);
        res.status(200).json({
            status: 'success',
            data: {
                users: result.rows[0]
            }
            
        })
    }
    catch (err) {
        console.log(err);
    }
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
