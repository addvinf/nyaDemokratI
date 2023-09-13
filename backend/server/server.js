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

//create user POST
app.post('/createUser', async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query("INSERT INTO users (email, hashed_email, name) VALUES ($1, $2, $3) returning *", [req.body.email, req.body.hashed_email, req.body.name]); 
        //console.log("Results" + results);
        res.status(201).json({
            status: 'success',
            data: {
                users: results.rows[0]
            }
        })

    } catch (err) {
        console.log(err);
    }

});

//uppdate user
app.put('/updateUser/:email', async (req, res) => {

    const results = await db.query("UPDATE users SET email = $1, hashed_email = $2, name = $3 WHERE email = $4 returning *", [req.body.email, req.body.hashed_email, req.body.name, req.params.email]);

    console.log(results);

    res.status(200).json({
        status: 'success',
        data: {
            users: results.rows[0]
        }
    })

});

//delete user
app.delete('/deleteUser/:email', async (req, res) => {

    try {
        const result = await db.query("DELETE FROM users WHERE email = $1", [req.params.email]);

    res.status(204).json({
        status: 'success'
    })
    } catch (err) {
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
