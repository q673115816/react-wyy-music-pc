import express from 'express'
import server from './server'
const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  console.log('ssr request')
  res.send()
})

app.listen(8080, () => {
  console.log('server work 8080')
})
