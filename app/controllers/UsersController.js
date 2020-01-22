const { User } = require('../models/User')

module.exports.list = (req, res) => {
    const { user } = req
    User.find()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.count = (req,res) => {
    const { user } = req
    Note.countDocuments({user: user._id})
        .then((count) => {
            res.json({count})
        })
        .catch((err) => {
            res.json(err)
        })
}

// user registration
module.exports.register = (req,res) => {
    new User(req.body).save()
        .then((user) => {
            //res.send(_.pick(user, ['_id','username', 'email']))
            res.send({user})
        })
        .catch((err) => {
            res.send(err)
        })
}

// user login
module.exports.login = (req,res) => {
    const { email, password } = req.body
    User.findByCredentials(email,password)
        .then((user) => {
            user.generateToken()
                .then((token) => {
                    res.send({token})
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.send(err)
        })
}

// user account
module.exports.account = function(req,res){
    const user = _.pick(user,['_id','username','email'])
    res.json(user)
}

// user logout
module.exports.logout = (req,res) => {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, {$pull: {tokens: {token: token}}})
        .then(() => {
            res.send({notice:'Successfully logged out'})
        })
        .catch((err) => {
            res.send(err)
        })
}