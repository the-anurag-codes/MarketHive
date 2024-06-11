import bcrypt from "bcryptjs"

const users = [
    {
        name: "Anurag Chauhan",
        email: "chauhananurag@gmail.com",
        password: bcrypt.hashSync('12345678'),
        isAdmin: true,
    },
    {
        name: "Piyush Sharma",
        email: "sharmapiyush@gmail.com",
        password: bcrypt.hashSync('12345678'),
    },
    {
        name: "Arjun Pandit",
        email: "panditarjun@gmail.com",
        password: bcrypt.hashSync('12345678'),
    },
]


export default users