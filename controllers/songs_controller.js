const express = require('express')
const router = express.Router()

const Song = require('../models/song')

router.get('/', (req, res) => {
  Song
    .findAll()
    .then(songs => res.json(songs))
})

router.post('/', (req, res) => {
  const { name, artist, genre } = req.body

  Song
    .create(name, artist, genre)
    .then(song => res.json(song))
})

router.delete('/:id', (req, res) => {
  const songID = req.params.id

  Song
    .delete(songId)
    .then(() => res.json({ message: 'song deleted successfully' }))
})

module.exports = router