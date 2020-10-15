
// Create a conotroller for login
module.exports.login = function (req, res)
{
    console.log(req.url);
    return res.end("<h1>Hey this you Login section</h1>");
}