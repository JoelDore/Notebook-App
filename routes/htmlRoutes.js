const path = require('path')

module.exports = (app) => {

    // Handle html GET requests:
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
        console.log(`GET /notes`)
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
        console.log(`GET ${req.url}`)
    })

}