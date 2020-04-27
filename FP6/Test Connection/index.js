const mongoose = require('mongoose')
const userSchema = require('./userSchema.js')
const User = mongoose.model('user', userSchema, 'user')

const connectionString = 'mongodb+srv://samuel:123@cluster0-jyzzu.mongodb.net/test?retryWrites=true&w=majority'

async function createUser(username) {
    return new User({
        username,
        created: Date.now()
    }).save()
}

async function findUser(username) {
    return await User.findOne({ username })
}

;
(async() => {
    const connector = mongoose.connect(connectionString)
    const username = process.argv[2].split('=')[1]

    let user = await connector.then(async() => {
        return findUser(username)
    })

    if (!user) {
        user = await createUser(username)
    }

    console.log(user)
    process.exit(0)
})()
// mongodb+srv://samuel:<password>@cluster0-jyzzu.mongodb.net/test?retryWrites=true&w=majority