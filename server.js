const express = require('express')
const path = require('path')
const app = express()
const Url = require('./db').Url
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(8000, () => console.log("Server started at http://localhost:8000"))


// short url to target url

app.get('/:url', (req, res) => {
    console.log(req.params.url)
     Url.findOne({
        where:{
            shortrUrl : req.params.url
        }
    }).then((url)=>{
        res.send(url.sourceUrl)
    }).catch((e)=>{
        console.log(e)
    })

})

// source url to custom url

app.post('/', (req, res) => {
    Url.create({
        sourceUrl: req.body.sourceUrl,
        shortrUrl: req.body.shortrUrl
    }).then((url) => {
        res.status(200).send(url)
    }).catch((e)=>{
        console.log(e)
    })
})