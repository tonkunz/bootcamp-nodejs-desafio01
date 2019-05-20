const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

// Middleware
const handleAgeMiddleware = (req, res, next) => {
  req.query.age ? next() : res.redirect('/')
}

// Rotas
app.get('/', (req, res) => {
  res.render('home')
})

app.post('/check', (req, res) => {
  const { age } = req.body

  if (req.body.age >= 18) {
    res.redirect(`/major?age=${age}`)
  } else {
    res.redirect(`/minor?age=${age}`)
  }
})

app.get('/major', handleAgeMiddleware, (req, res) => {
  const { age } = req.query

  return res.render('major', { age })
})

app.get('/minor', handleAgeMiddleware, (req, res) => {
  const { age } = req.query
  return res.render('minor', { age })
})

app.listen(3001, () => {
  console.log('Server running on port 3001!')
})
