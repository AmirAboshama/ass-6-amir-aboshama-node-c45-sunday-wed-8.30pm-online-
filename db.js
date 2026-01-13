const mysql = require("mysql2/promise")

// Create database connection
const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    })

    console.log("Database connected successfully")
    return connection
  } catch (error) {
    console.log("Database connection failed")
    throw error
  }
}

module.exports = connectDB
