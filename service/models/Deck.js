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
    Cards: [CardSchema], // allows us to cretae  ana array of card objects
    size: Number,
    userID: mongoose.Type.ObjectID
})

export const Deck = mongoose.model('Deck', DeckSchema)