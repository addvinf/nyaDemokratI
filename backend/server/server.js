require('dotenv').config();


const express = require('express');
const morgan = require('morgan');
const db = require('./db');
const cors = require('cors');

const app = express();


//middleware
app.use(cors());
app.use(express.json());

//get vote results
app.get('/getVoteResults', async (req, res) => {
    try {
        const result = await db.query("SELECT vote_option, COUNT(*) FROM votes GROUP BY vote_option");
        res.status(200).json({
            status: 'success',
            results: result.rows.length,
            data: {
                votes: result.rows
            }
        })
        console.log(result.rows);
    }
    catch (err) {
        console.log(err);
    }
    
    
});

//set user status to active
app.put('/setUserStatus/:email', async (req, res) => {
    try {
        const result = await db.query("UPDATE users SET status = $1 WHERE email = $2 returning *", [req.body.status, req.params.email]);
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


//vote POST
app.post('/vote', async (req, res) => {
    //console.log(req.body);

    try {

        const userExist = await db.query("SELECT * FROM users WHERE email = $1 AND status = 'online'", [req.body.email]);

        if (userExist.rows.length === 0) {
            res.status(201).json({
                status: 'nonexistent',
            })
        }
        else {
            const result = await db.query(
                "INSERT INTO votes (user_email, vote_option) VALUES ($1, $2) returning *",
                [req.body.email, req.body.vote]
            );
            res.status(201).json({
                status: 'success',
                data: {
                    votes: result.rows[0]
    
                }
            })
            
        }
        
        
    }
    catch (err) {
        //console.log(err);
        res.status(201).json({
            status: 'fail'
        })
    }


        //console.log(err);
        /*res.status(400).json({
            status: 'fail'
        })*/

    
});

//get all votes GET
app.get('/getVotes', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM votes");
        res.status(200).json({
            status: 'success',
            results: result.rows.length,
            data: {
                votes: result.rows
            }
        })
    }
    catch (err) {
        console.log(err);
    }
});

//get all votes for a vote_option
app.get('/getVotes/:vote_option', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM votes WHERE vote_option = $1", [req.params.vote_option]);
        res.status(200).json({
            status: 'success',
            results: result.rows.length,
            data: {
                votes: result.rows
            }
        })
    }
    catch (err) {
        console.log(err);
    }
});

//delete all votes DELETE
app.delete('/deleteVotes', async (req, res) => {
    try {
        const result = await db.query("DELETE FROM votes");
        res.status(204).json({
            status: 'success'
        })
    }
    catch (err) {
        console.log(err);
    }
});

//update election data PUT
app.put('/updateElectionData/', async (req, res) => {
    try{
        const result = await db.query("UPDATE election_data SET name = $1, status = $2, candidates = $3  WHERE id = 1 returning *", [req.body.name, req.body.status, req.body.candidates]);
        res.status(200).json({
            status: 'success',
            data: {
                election_data: result.rows[0]
            }
        })
    }
    catch(err){console.log(err)}

});

//get election data GET
app.get('/getElectionData', async (req, res) => {
    try{
        const result = await db.query("SELECT * FROM election_data WHERE id = 1");
        res.status(200).json({
            status: 'success',
            data: {
                election_data: result.rows[0]
            }
        })
    }
    catch(err){console.log(err)}

});


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
        //console.log(result);

    } 
    catch (err) {
        console.log(err);
    }
    
    
    
    
});

//get specific user
//Denna borde man kanske göra om till att hämta från hashen
app.get('/getUser/:email', async (req, res) => {
    //console.log(req.params.email);
    try {
        const result = await db.query(`SELECT * FROM users WHERE email = $1`, [req.params.email])
        //console.log(result);
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
    //console.log(req.body);
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

    //console.log(results);

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
