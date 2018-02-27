const path = require('path');

const express = require('express');

const pathPublic = path.join(__dirname, '/../public');

var port = process.env.PORT || 3000;
//console.log(pathPublic);
//console.log(__dirname + '/../public');

var app = express();

//-- middleware for static page 
app.use(express.static(pathPublic));


//--listing at port 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});