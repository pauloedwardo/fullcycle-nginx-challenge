const express = require('express')
const app = express()
const port = 3000
const peopleService = require('./peopleService')

app.get('/', (req, res) => {
    peopleService.save("Teste-FullCycle")
    peopleService.getAll(function(result) {
        res.send(`<h1> Full Cycle Rocks!</h1><br><p>${result}<p/>`)
    })
    
})

app.listen(port, () => {
    console.log('Rodando na porta -> ' + port)
})