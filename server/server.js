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



if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Server Setup
const port = process.env.PORT || 5000;

app.use(router)

app.listen(port, () => {
    console.log('Nodemon listening on port ' + port)
})

