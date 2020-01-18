 const express = require('express');
 const path = require('path');

 const app = express();
 const port = 8080;

app.use(express.static('client'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});


app.listen(port);