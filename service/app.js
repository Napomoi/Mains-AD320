import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { Deck } from './models/Deck.js'
const app = express()
const port = 8000

// Connect to MongoDB
//dummy
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@week6cluster.1qfd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
try {
  await mongoose.connect(connectionString)
} catch (err) {
  console.log('error ', err)
}

// Middleware
const exampleMiddleware = (req, res, next) => {
  console.log('example middleware')
  next()
}
app.use(cors())
app.use(express.json())
app.use(exampleMiddleware)

// Routes
// localhost:8000
// health check


app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// // get all cards from deck without width
// // localhost:8000/decks/deckID/cards
// // localhost:8000/decks/4/cards


// Get all cards for a deck, with the option to paginate results
app.get('/decks/:id/cards', async (req, res) => {
    const limit = req.query.limit
    const deck = await Deck.findById(req.params.id)
    if (deck) {
      res.send(deck.cards.slice(0, 5))
    } else {
      res.sendStatus(404)
    }
  })
  // Get individual card by Id
  const cardsById = async (req, res) => {
    const deck = await Deck.findOne({'cards._id': req.params.id})
    if (deck) {
      res.send(deck.cards.filter(card => card._id.toString() === req.params.id))
    } else {
      res.sendStatus(404)
    }
  }
  app.get('/cards/:id', cardsById)
  // Get a deck by ID
  app.get('/decks/:id', async (req, res) => {
    const deck = await Deck.findById(req.params.id)
    if (deck) {
      res.send(deck)
    } else {
      res.sendStatus(404)
    }
  })
  // Get a deck by user
  app.get('/users/:id', async (req, res) => {
    const deck = await Deck.findOne({'userId': req.params.id})
    if (deck) {
      res.send(deck)
    } else {
      res.sendStatus(404)
    }
  })


// // Create card
// // localhost:8000/cards/
// app.post('/test', async (req, res) => {
//   console.log(req.body)
//   res.send(req.body.test)
// })
// app.post('/cards', async (req, res) => {
//   const cardRequest = req.body
  
//   if ((!cardRequest.frontImage && !cardRequest.frontText) || 
//     (!cardRequest.backImage && !cardRequest.backText)) {
//     res.status(400).send('Card data incomplete')
//   }
//   if ((frontImage && !isUrl(frontImage)) || (backImage && !isUrl(backImage))) {
//     res.status(400).send('Image fields must be valid URLs')
//   }
//   if (!cardRequest.deckId) {
//     res.status(400).send('Deck ID is required')
//   }
//   try {
//     const deck = await Deck.findById(cardRequest.deckId)
//     if (deck) {
//       deck.cards.push({
//         frontImage: cardRequest.frontImage,
//         frontText: cardRequest.frontText,
//         backImage: cardRequest.backImage,
//         backText: cardRequest.backText
//       })
//       await deck.save()
//       res.sendStatus(204)
//     } else {
//       res.sendStatus(404)
//     }
//   } catch (err) {
//     console.log(`error in creating card ${err}`)
//     res.sendStatus(502)
//   }
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
