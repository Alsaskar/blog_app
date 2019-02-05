const express = require('express')
const db = require('../config/database')
const router = express.Router()
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

router.post('/register', (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT email FROM users WHERE email = "'+email+'"', (error, cek) => {
        if(error) throw error

        if(cek.length > 0){ // jika email sudah digunakan
            res.json({cek_email: true})
        }else{
            bcrypt.hash(password, null, null, function(err, hash) {
                db.query('INSERT INTO users(firstname, lastname, email, password) VALUES ("'+ firstname +'", "'+ lastname +'", "'+ email +'", "'+ hash +'")', (err, result) => {
                    if(err) throw err
            
                    res.send(JSON.stringify(result))
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT id, email, password FROM users WHERE email = "'+email+'"', (err, result) => {
        if(err) throw err

        if(result.length < 1){
            res.json({ message: 'Email is wrong' })
        }else{
            bcrypt.compare(password, result[0].password, (error, response) => {
                if(response){

                    // create token
                    const payload = {
                        jti: result[0].id,
                        email: email
                    }

                    const token = jwt.sign(payload, config.secret, {expiresIn: '24h'})

                    res.json({ message: true, token: token })
                }else{
                    res.json({ message: 'Password is wrong' })
                }
            })
        }
    })
})

module.exports = router