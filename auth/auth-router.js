const router = require('express').Router();
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const secret =require('../secrets/secrets');
const users = require('./auth-model');

/* 
1. write a test to register a successful user
2. if the user password field is missing should return an error 422
3. if input a username and password correctly 
4. only unique users should be able to register 

*/
router.post('/register', async (req, res)=>{
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    try{
        let savedId = await users.add(user)
        let userData = await users.findBy(savedId)
        const token = getJwt(userData);
        return res.status(200).json({...userData[0],password:"" ,token})
    }
    catch(err){
        res.status(500).json(error);
    }
    // users.add(user)
    // // .then(saved => {
    //     users.findBy(users).then()
    //     const token = getJwt(user);
    //     res.status(201).json(saved,token)
    // })
    // .catch(error =>{
    //     res.status(500).json(error);
    // });
});
/*
1. Check for empty fields
2. if the username is valid    
3. make sure the JWT is receiving the proper payload
4. 

*/
router.post('/login', (req, res) =>{
    let { username, password } = req.body;
    users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = getJwt(user);
            res.status(200).json({message: `Welcome ${user.username}`,token})
        }else{
            res.status(401).json({ message: 'Invalid credentials'})
        }
    })
    .catch(error =>{
        res.status(500).json(error);
    })

});
    
function getJwt(user){
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1 day'
    }
        return jwt.sign(payload, secret.jwtSecret, options)
        }

module.exports = router;

