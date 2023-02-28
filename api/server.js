const express= require('express')
const app = express()

const PORT = 5000

app.get('/', (req,res) => {
    res.send('Welcome')
})

app.listen(PORT, () => {
    console.log(`Server is run on port: ${PORT}`)
})