import express from 'express'

const app = express()

// www.minhaa 
app.get('/ads', (request, response) => {
    return response.send('Acessou Ads!')
})

app.listen(3333)