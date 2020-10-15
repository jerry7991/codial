const express = require('express');
const port = 8000;
const app = express();

//  use express router

//  Any request comming at local host all request will handle throgh routers
app.use('/', require('./routers'));

// Fo any further routers, access from here like
//  router.use('/routerName',require('./routerFile'));


//  Set the view engine as ejs
app.set('view engine', 'ejs');

//  Provide directory to ejs
app.set('views', './views');


app.listen(port, function (err)
{
    if (err) {
        console.log("oops you got an error while loading the express on port number ", port);
        return;
    }
    console.log(`cool! server is running on the port number : ${port}`);
});