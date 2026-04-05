const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/userModel')

async function register(req, res) {
    const { name, email, password, contactNumber } = req.body
    try {

        regUser = await User.findOne({ where: { email: email } })
        console.log(regUser)
        if (regUser) {
            res.status(400).send({ msg: "email already registered" })
        } else {
            const salt = await bcryptjs.genSalt(8)
            const hashPassword = await bcryptjs.hash(password, salt)

            newUser = await User.create({
                name: name,
                email: email,
                password: hashPassword,
                contactNumber: contactNumber
            })
            res.status(200).send({ success: true, msg: "registered successfully" })
        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}

async function login(req, res) {
    const { email, password } = req.body
    try {
        const alreadyUser = await User.findOne({ where: { email: email } })
        console.log(alreadyUser)
        if (!alreadyUser) {
            res.status(400).send({ msg: "User not found" })
        } else {
            checkPassword = await bcryptjs.compare(password, alreadyUser.password)
            console.log(checkPassword)
            if (!checkPassword) {
                res.status(400).send({ msg: "Invalid Password" })
            } else {
                const ID = alreadyUser.id
                const role = alreadyUser.role
                console.log(ID,"******ID")
                const genToken = jwt.sign({ ID: ID,role:role }, process.env.SECREAT_KEY, { expiresIn: "1hr" })
                console.log(genToken,"******")
                res.status(202).send({ msg: "Login successful", token: genToken })
            }
        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}

async function getUserInfo(req, res) {
    try {
        const ID = req.user.ID
        const loggedUserInfo = await User.findByPk(ID, {
            attributes: {
                exclude: ["password"]
            }
        })
        res.status(200).send({ user: loggedUserInfo, success: true })
    } catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}

module.exports = {
    register,
    login,
    getUserInfo
}


// {
//     "name":"John",
//     "email":"john@gmail.com",
//     "password":"john123",
//     "contactNumber":"1234567890"
// }