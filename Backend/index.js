const express = require("express")
const app = express()
const cors=require("cors")
app.use(cors())
const seeder = require("./server/config/seeder")
seeder.adminreg()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const db = require("./server/config/db")
app.get("/", (req, res) => {
res.send("Welcome to server")
})
const apiRoutes = require("./server/routes/apiRoutes")
app.use("/api", apiRoutes)
const PORT = 5000
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in server", err);
    }
    else {
        console.log("Server is running at port", PORT);

    }
})


