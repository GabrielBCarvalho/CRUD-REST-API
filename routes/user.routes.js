const express = require('express')
const router = express.Router()
const user = require('../models/users.model')
const m = require('../helpers/middlewares')

module.exports = router

// Return all users
router.get('/', async(req, res) => {
    await user.getUsers()
    .then(users => res.json(users))
    .catch(err =>{
        if(err.status)
            res.status(err.status).json({message: err.message});
        else
            res.status(500).json({message: err.message});
    })
})


// Return an user given an id
router.get('/:id', m.checkIdIsInteger, async (req, res) => {
    const id = req.params.id;

    await user.getUser(id)
    .then(user => res.json(user))
    .catch(err => {
        if(err.status)
            res.status(err.status).json({message: err.message});
        else
            res.status(500).json({message: err.message});
    })
})


// Insert a new user
router.post('/', m.checkUserAttributes, async(req, res) =>{
    await user.insertUser(req.body)
    .then(user => res.status(201).json({
        message: 'O usuário foi inserido com sucesso.',
        content: user
    }))
    .catch(err => res.status(500).json({message: err.message}));
})


// Update an user
router.put('/:id', m.checkIdIsInteger, m.checkUserAttributes, async(req, res) => {
    const id = req.params.id;
    await user.updateUser(id, req.body)
    .then(user => res.json({
        message: 'O usuário foi atualizado.',
        content: user
    }))
    .catch(err => {
        if(err.status)
            res.status(err.status).json({message: err.message});
        res.status(500).json({message: err.message});
    })
})


// Delete user
router.delete('/:id', m.checkIdIsInteger, async(req, res) => {
    const id = req.params.id;

    await user.deleteUser(id)
    .then(user => res.json({
        message: 'O usuário foi deletado.'
    }))
    .catch(err => {
        if(err.status)
            res.status(err.status).json({message: err.message});
        res.status(500).json({message: err.message});
    })
})