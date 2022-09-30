const db = require('../db/db')

const Song = {
  findAll: () => {
    const sql = 'SELECT * FROM songs'

    return db 
      .query(sql)
      .then(dbRes = dbRes.rows)
  },

  create: (name, artist, genre) => {
    const sql = `
      INSERT INTO songs(name, artist, genre)
      VALUES ($1, $2, $3)
      RETURNING *
    `

    return db
      .query(sql, [name, artist, genre])
      .then(dbRes => dbRes.rows[0])
  }
}