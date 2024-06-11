import mongoose from "mongoose"
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
import products from "./data/products.js"
import users from "./data/users.js"
import Product from "./models/productModel.js"
import User from "./models/userModel.js"
import Order from "./models/orderModel.js"

dotenv.config()
connectDB()

const importData = async ()=>{
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        const insertedUsers = await User.insertMany(users)
        console.log(`users ${insertedUsers}`)
        const adminUser = insertedUsers[0]._id

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        const insertedProducts = await Product.insertMany(sampleProducts)

        console.log(`Products ${insertedProducts}`)
        console.log('Data Inserted!')

    } catch (error) {
        console.error(`Import Data Error: ${error.message}`)
        process.exit(1)
    }

}


const destroyData = async ()=>{
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        console.log('Data Destroyed!')

    } catch (error) {
        console.error(`Destroy Data Error: ${error.message}`)
        process.exit(1)
    }
}


if(process.argv[2] === "-d"){
    destroyData()
} else {
    importData()
}