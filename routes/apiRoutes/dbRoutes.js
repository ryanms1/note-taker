const router = require('express').Router()
const notesDB = require('../../db/db.json')
const fs = require('fs')

router.get('/notes', (req, res) => {
    res.json(notesDB)
})

router.post('/notes', (req, res) => {
    req.body.id = notesDB.length.toString()

    const newNote = req.body
    notesDB.push(newNote)
    fs.writeFile('db/db.json', JSON.stringify(notesDB), err => {
        if (err) throw err
    })
    res.json(notesDB)
})

module.exports = router