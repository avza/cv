const express = require('express')
const app = express()

const path = require('path')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, (err) => {
    if (err) {
        console.log('err', err)
    } else {
        console.log(`Server running in port ${port}`)
    }
})
