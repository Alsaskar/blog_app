const config = require('../config/config')
const jwt    = require('jsonwebtoken')

module.exports = {
    checkToken: (req, res, next) => {
        // check header or url parameters or post parameters for token
        var token = req.query.token

        // decode token
        if(token){
            // verifies secret and checks expires
            jwt.verify(token, config.secret, (err, decoded) => {
                if(err){
                    return res.json({ loggedin: false })
                }else{
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded
                    next()
                }
            })
        }else{
            // if there is no token
            // return an error
            return res.json({ message: 'No token provided' })
        }
    }
}