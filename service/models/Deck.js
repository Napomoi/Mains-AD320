import mongoose from 'mongoose'

//Creating a schema

const CardSchema = new mongoose.Schema({
    frontImage: String,
    frontText: String,
    backImage: String,
    backText: String,
})

const DeckSchema = new mongoose.Schema({
    name: String,
    cards: [CardSchema], // allows us to create ana array of card objects
    size: Number,
    userID: mongoose.Types.ObjectId
})

export const Deck = mongoose.model('Deck', DeckSchema)