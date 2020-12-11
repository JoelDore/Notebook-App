const notes = require('../db/db.json')
const fs = require('fs')

module.exports = (app) => {

    // Handle api GET requests
    app.get('/api/notes', (req, res) => {
        res.json(notes)
    })

    // Handle api POST requests
    app.post('/api/notes', (req, res) => {
        // Generate unique ID (= milliseconds elapsed since 1/1/1970)
        req.body.id = Date.now()
        notes.push(req.body)

        // Write to db.json
        fs.writeFile('./db/db.json', JSON.stringify(notes), err => { if (err) throw err })

        res.json({ notes })
    })

    // Handle api DELETE requests
    app.delete('/api/notes/:id', (req, res) => {
        // Remove note by ID
        const delIndex = notes.findIndex(note => note.id === parseInt(req.params.id))
        const removed = notes.splice(delIndex, 1)

        // Write to db.json
        fs.writeFile('./db/db.json', JSON.stringify(notes), err => { if (err) throw err })

        res.json({ removed, notes })
    })

}