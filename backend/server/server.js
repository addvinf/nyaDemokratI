require('dotenv').config();

const express = require('express');
const app = express();

app.get('/getUser', (req, res) => {
    res.json({
        name: 'John Doe',
        email: 'edvinfa@kth.se'
    })
});

//Det vi kommer vilja ha som anrop är:
/*

    create user POST
    get user GET
    delete user DELETE

*/

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
