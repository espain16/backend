const router = require('express').Router();
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const secret =require('../secrets/secrets');

router.post('/register', (req, res)=>{
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    user.add(user)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(error =>{
        res.status(500).json(error);
    });
});

router.post('/login', (req, res) =>{
    let { username, password } = req.body;
    users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = getJwt(user);
            res.status(200).json({message: `Welcome ${user.username}`})
        }else{
            res.status(401).json({ message: 'Invalid credentials'})
        }
    })
    .catch(error =>{
        res.status(500).json(error);
    })

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
});

module.exports = router;

