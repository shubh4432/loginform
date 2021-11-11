const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://shubham:shubham1@registrationform.ck4i3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)

    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB