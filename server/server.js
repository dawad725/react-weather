const path = require('path');
require('dotenv').config({
    path: path.resolve(
        process.env.NODE_ENV === 'production' ? './.env.production' : './.env.development'
    )
});
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Server Setup
const port = process.env.PORT || 5000;

app.use(router)

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log('Node listening on port ' + port)
})

