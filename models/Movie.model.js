const {Schema, model} = require('mongoose')

const movieSchema = new Schema (
    {
        title: { type: String},
        director: String,
        image: String,
        description: String,
        stars: [ String ],
        showtimes: [{
            type: String
        }]
    },
    {
        timestamps: true
    }
)

module.exports = model('Movie', movieSchema);