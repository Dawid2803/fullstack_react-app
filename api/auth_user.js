const auth = require('basic-auth');
const { User } = require('./models');
const bcrypt = require('bcryptjs');

// Middleware to authenticate the request using Basic Authentication.
exports.authenticateUser = async (req, res, next) => {
    let message;
    
    //parse the users credentials from the authorization header
    const credentials = auth(req);

    if(credentials){
        const user = await User.findOne({ where: {emailAddress: credentials.name}})
        if(user){
            const authenticated = bcrypt.compareSync(credentials.pass, user.password);
            if(authenticated){
                console.log(`Authentication successful for username: ${user.emailAddress}`);
           
                req.currentUser = user;
            }else{
                message = `Authentication failure for username: ${user.emailAddress}`;
            }
        }else{
            message = `User not found for username: ${user.emailAddress}`
        }
    }else{
        message = `Auth header not found`;
    };

    if(message) {
        console.warn(message);
        res.status(401).json({ message: 'Access Denied'});
    }else {
        next();
    }

}