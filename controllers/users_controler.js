//  First i need to export a action correspond to controller
module.exports.profile = function (req, res)
{
    return res.render('user.ejs', {
        title: "User's profile"
    });
};

module.exports.posts = function (req, res)
{
    return res.render('user.ejs', {
        title: "User's post"
    });
};