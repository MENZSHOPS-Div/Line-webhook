const express = require("express")
const fetch = require("node-fetch")

const app = express()

app.use(express.json())

const TOKEN = "fG9weBficKjxjm+Xl4xu5fbcz/xtSAnmpjzZyCpBEKEvIx+tOH4pAzBD8s1ZuoCtRhyejCrOF92ty2hlj7Z0qUdAS8rtfvAyNrcHXV+BMF2XMNOnR8smAG+10JoMBDHh5BuZf1eXgHygymAssyhzXQdB04t89/1O/w1cDnyilFU="

app.post("/webhook", async (req,res)=>{

    const event = req.body.events[0]

    if(event.type === "message"){

        const replyToken = event.replyToken
        const userText = event.message.text

        await fetch("https://api.line.me/v2/bot/message/reply",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + TOKEN
            },
            body:JSON.stringify({
                replyToken:replyToken,
                messages:[
                    {
                        type:"text",
                        text:"คุณพิมพ์ว่า: " + userText
                    }
                ]
            })
        })

    }

    res.status(200).send("OK")

})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log("server started"))
