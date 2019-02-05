const express = require('express')
const db = require('../config/database')
const router = express.Router()
const middleware = require('../middleware/checktoken')
const friendlyUrl = require('friendly-url-extended')

router.get('/', middleware.checkToken, (req, res, next) => {
    // cek user yang sedang login
    db.query('SELECT id, firstname, lastname, email FROM users WHERE email = "'+req.decoded.email+'"', (err, result) => {
        res.json({user: result, loggedin: true})
    })
})

// create post
router.post('/create-post', middleware.checkToken, (req, res) => {

    subject = req.body.subject
    category = req.body.category
    content = req.body.content
    url = friendlyUrl(subject)

    db.query('SELECT id, firstname, lastname, email FROM users WHERE email = "'+req.decoded.email+'"', (err, result) => {
        db.query('INSERT INTO post(subject, category, content, url, id_user) VALUES("'+subject+'", "'+category+'", "'+content+'", "'+url+'", "'+result[0].id+'")', (error, success) => {
            if(error) throw error

            res.json({message: 'Success create post.'})
        })
    })
})

// list post
router.get('/lisPost', middleware.checkToken, (req, res) => {
    db.query('SELECT id, email FROM users WHERE email = "'+req.decoded.email+'"', (err, result) => {
        db.query('SELECT * FROM post WHERE id_user = "'+result[0].id+'"', (error, res_post) => {
            if(error) throw error

            res.json({posts: res_post})
        })
    })
})

// delete post
router.delete('/deletePost/:id', (req, res) => {
    db.query('DELETE FROM post WHERE id = "'+req.params.id+'"', (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

module.exports = router