const notes = require('../db/db.json')
const fs = require('fs')

module.exports = (app) => {

    // Handle api GET requests
    app.get('/api/notes', (req, res) => {
        res.json(notes)
    })

    // Handle api POST requests
    app.post('/api/notes', (req, res) => {
        notes.push(req.body)

        // Write to db.json
        fs.writeFile('./db/db.json', JSON.stringify(notes), err => { if (err) throw err })

        res.json({ notes })
    })

    // Handle api DELETE requests

}