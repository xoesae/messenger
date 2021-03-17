import express from 'express'

const app = express()

const PORT = process.env.PORT || 3333

app.get('/', (request, response) => {
  return response.json({ hello: "world" })
})

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
