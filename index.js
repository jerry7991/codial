const express = require('express');
const port = 8000;
const app = express();

//  use express router
app.use('/', require('./routers'))

app.listen(port, function (err)
{
    if (err) {
        console.log("oops you got an error while loading the express on port number ", port);
        return;
    }
    console.log(`cool! server is running on the port number : ${port}`);
});