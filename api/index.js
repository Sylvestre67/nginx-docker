const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.json({data:{user: {first_name:'John', last_name: 'Doe'}}})
})

app.listen(port, () => console.log(`API is listening on port ${port}!`))