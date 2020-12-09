const express = require('express')
const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

require("./routes/htmlRoutes")(app)

app.listen(PORT, () => {
    console.log(`App listening on localhost:${PORT}`)
})