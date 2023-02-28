const express= require('express')
const { default: mongoose } = require('mongoose')
const userRouter = require('./routes/user')
const app = express()

const PORT = 8000
const URI = 'mongodb+srv://admin:ud25bZr0G2hHBLA9@cluster1.nsfxbq6.mongodb.net/testmongodb?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(URI)
        console.log('Connected mongodb')
    } catch (error) {
        console.log(`Error -> ${error}`)    
    }
}

connect()
app.use(express.json())
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server is run on port: ${PORT}`)
})