/////////////////////////////  part 1 //////////////////////////////

// مرفق كصوره بالملف 

/////////////////////////// end  part 1 //////////////////////////////
/////////////////////////////  part 2 //////////////////////////////

// Musician(musician_id, name, street, city, phone)

// Instrument(instrument_name, musical_key)

// Album(album_id, title, copyright_date, producer_id)

// Song(song_title, author, album_id)

// Musician_Instrument(musician_id, instrument_name)

// Musician_Song(musician_id, song_title)
   
/////////////////////////// end  part 2 //////////////////////////////





///////////////////////////  part 3 //////////////////////////////
// const express = require("express")
// require("dotenv").config()
// const connectDB = require("./db")

// const app = express()
// const PORT = 3000
// const mysql = require("mysql2");

// app.use(express.json())
   ////////////////////////  (1) /////////////////////////////////
// بنقوم سيرفر على البورت 3000ونربط داتا بيز وبعدها بنروح نعكل الtable  هناك ف الادمن او نكتب دا ف ال sql  

// app.post("/createTables", (req, res) => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS Suppliers (
//       SupplierID INT AUTO_INCREMENT PRIMARY KEY,
//       SupplierName VARCHAR(50),
//       ContactNumber VARCHAR(20)
//     );

//     CREATE TABLE IF NOT EXISTS Products (
//       ProductID INT AUTO_INCREMENT PRIMARY KEY,
//       ProductName VARCHAR(50),
//       Price DECIMAL(10,2),
//       StockQuantity INT,
//       SupplierID INT
//     );

//     CREATE TABLE IF NOT EXISTS Sales (
//       SaleID INT AUTO_INCREMENT PRIMARY KEY,
//       ProductID INT,
//       QuantitySold INT,
//       SaleDate DATE
//     );
//   `;

//   connection.query(query, (err) => {
//     if (err)
//       return res.status(500).json({ errMsg: "DB error", err });

//     res.status(200).json({ message: "Tables created" });
//   });
// });
   ////////////////////////  (2) /////////////////////////////////

// ومن هنا نبدا نعمل الماب والبروسيس علي ال table 

// app.patch("/addCategory", (req, res) => { 
//   const query = `ALTER TABLE Products ADD Category VARCHAR(50)`;

//   connection.execute(query, (err) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "Category column added successfully" });
//   });
// });

   ////////////////////////  (3) /////////////////////////////////

// app.patch("/removeCategory", (req, res) => { 
//   const query = `ALTER TABLE Products 
//  DROP COLUMN Category`;

//   connection.execute(query, (err) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "Category column removed successfully" });
//   });
// });

   ////////////////////////  (4) /////////////////////////////////
// app.patch("/changeContactNumberType", (req, res) => { 
//   const query = `ALTER TABLE Suppliers
//  MODIFY ContactNumber
//  VARCHAR(15)`;

//   connection.execute(query, (err) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "ContactNumber column type changed to VARCHAR(15)" });
//   });
// });

   ////////////////////////  (5) /////////////////////////////////
// app.patch("/productNameNotNull", (req, res) => { 
//   const query = `ALTER TABLE Products
//    MODIFY ProductName 
//    VARCHAR(255) NOT NULL`;

//   connection.execute(query, (err) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "ProductName set to NOT NULL" });
//   });
// });

   ////////////////////////  (6) /////////////////////////////////

// app.post("/addProducts", (req, res) => { 
//   const query = `
//     INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID)
//     VALUES 
//       (?, ?, ?, (SELECT SupplierID FROM Suppliers WHERE SupplierName = ?)),
//       (?, ?, ?, (SELECT SupplierID FROM Suppliers WHERE SupplierName = ?)),
//       (?, ?, ?, (SELECT SupplierID FROM Suppliers WHERE SupplierName = ?))
//   `;
//   const values = [
//     'Milk', 15.00, 50, 'FreshFoods',
//     'Bread', 10.00, 30, 'FreshFoods',
//     'Eggs', 20.00, 40, 'FreshFoods'
//   ];

//   connection.execute(query, values, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "Products added", result });
//   });
// });



// app.post("/addSale", (req, res) => {
//   const query = `
//     INSERT INTO Sales (ProductID, QuantitySold, SaleDate)
//     VALUES ((SELECT ProductID FROM Products WHERE ProductName = ?), ?, ?)
//   `;
//   const values = ['Milk', 2, '2025-05-20'];

//   connection.execute(query, values, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "Sale recorded", result });
//   });
// });



   ////////////////////////  (7) /////////////////////////////////


// app.patch("/updateBreadPrice", (req, res) => { 
//   const query = `UPDATE Products SET Price = ? WHERE ProductName = ?`;
//   const values = [25.00, 'Bread'];

//   connection.execute(query, values, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "Bread price updated", result });
//   });
// });

   ////////////////////////  (8) /////////////////////////////////


// app.delete("/deleteEggs", (req, res) => { 
//   const query = `DELETE FROM Products WHERE ProductName = ?`;
//   const values = ['Eggs'];

//   connection.execute(query, values, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "Eggs deleted", result });
//   });
// });


   ////////////////////////  (9) /////////////////////////////////


// app.get("/totalSold", (req, res) => {
//   const query = `
//     SELECT ProductID, SUM(QuantitySold) AS totalSold
//     FROM Sales
//     GROUP BY ProductID
//   `;

//   connection.execute(query, (err, result) => {
//     if (err) return res.status(500).json({ errorMsg: "DB error!", error: err });
//     res.status(200).json(result);
//   });
// });

   ////////////////////////  (10) /////////////////////////////////
// app.get("/highestStock", (req, res) => {
//   const query = `
//     SELECT * FROM Products
//     ORDER BY StockQuantity DESC
//     LIMIT 1
//   `;

//   connection.execute(query, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json(result);
//   });
// });

   ////////////////////////  (11) /////////////////////////////////

// app.get("/suppliersF", (req, res) => {
//   const query = `SELECT * FROM Suppliers
//    WHERE SupplierName LIKE 'F%'`;

//   connection.execute(query, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json(result);
//   });
// });

   ////////////////////////  (12) /////////////////////////////////
// app.get("/neverSoldProducts", (req, res) => {
//   const query = `
//     SELECT * FROM Products
//     WHERE ProductID NOT IN (SELECT ProductID FROM Sales)
//   `;

//   connection.execute(query, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json(result);
//   });
// });

   ////////////////////////  (13) /////////////////////////////////

// app.get("/salesWithProduct", (req, res) => {
//   const query = `
//     SELECT s.SaleID, p.ProductName, s.QuantitySold, s.SaleDate
//     FROM Sales s
//     JOIN Products p ON s.ProductID = p.ProductID
//   `;

//   connection.execute(query, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json(result);
//   });
// });

   ////////////////////////  (14) /////////////////////////////////

// app.post("/createStoreManager", (req, res) => {
//   const query = `
//     CREATE USER 'store_manager'@'%' IDENTIFIED BY 'password123';
//     GRANT SELECT, INSERT, UPDATE ON *.* TO 'store_manager'@'%';
//     FLUSH PRIVILEGES;
//   `;

//   connection.execute(query, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "User store_manager created with permissions", result });
//   });
// });

   ////////////////////////  (15) /////////////////////////////////

// app.patch("/revokeUpdate", (req, res) => {
//   const query = `
//     REVOKE UPDATE ON *.* FROM 'store_manager'@'%';
//     FLUSH PRIVILEGES;
//   `;

//   connection.execute(query, (err, result) => {
//     if (err) return res.status(500).json({ errMsg: "DB error", err });
//     res.status(200).json({ message: "UPDATE permission revoked from store_manager", result });
//   });
// });

   ////////////////////////  (16) /////////////////////////////////


// app.patch("/grantDeleteStoreManager", (req, res) => {
//   const query = `
//     GRANT DELETE ON your_database.Products TO 'store_manager'@'%';
//     FLUSH PRIVILEGES;
//   `;

//   connection.execute(query, (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         errMsg: "DB error while granting DELETE",
//         err
//       });
//     }

//     res.status(200).json({
//       message: "DELETE permission granted to store_manager on Products table",
//       result
//     });
//   });
// });











///////////////////////////////run server /////////////////////////////
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
