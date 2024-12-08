const mongoose = require("mongoose")

const database = mongoose.connect(process.env.MONGO_URI)
    .then((success) => {
        console.log('Database Connected Successfully')
    })
    .catch((error) => {
        console.log(error)
        console.log('Database Error')
    })

module.exports = { database }