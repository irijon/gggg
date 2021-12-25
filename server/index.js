import express, { query } from 'express'
import cors from 'cors'
import parser from './parser/index.js'
const app = express()
const port = 3001

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())
  
app.post('/products', async (req, res) => {
  console.log(req.body.query)
    let resp = 'tttt'
    try {
        resp = await parser(req.body.query)
    }catch(err) {
        console.log(err)
    }
    console.log(resp)
    res.send(resp)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})