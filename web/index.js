const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api.js');
const notFoundRoutes = require('./routes/404.js');

const app = express();

// Serve the React app
app.use('/', express.static(path.join(__dirname, '/client/build'))); // eslint-disable-line no-undef 

// Serve API routes
app.use('/api', apiRoutes);

// Serve all other routes
app.use('*', notFoundRoutes);

// Catch errors
app.use(function(err, req, res, next) { // eslint-disable-line no-unused-vars
    return res.status(500).send({error: err});
});

// Start the server
const port = process.env.PORT || 5000; // eslint-disable-line no-undef 
app.listen(port, () => {
    console.log('App is listening on port ' + port);
    console.log('Visit http://localhost:5000/');
});
