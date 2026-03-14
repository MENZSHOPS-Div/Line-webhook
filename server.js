const express = require("express")

const app = express()

app.use(express.json())

app.post("/webhook", (req, res) => {

    console.log("LINE EVENT:")
    console.log(req.body)

    res.status(200).send("OK")

})

app.get("/", (req,res)=>{
    res.send("LINE webhook running")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})