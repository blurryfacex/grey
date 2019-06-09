import mongoose from 'mongoose'

const Movie = mongoose.model('Movie')

export const getList = async (type, year) => {
  let query = {}
  if (type) query.movieTypes = {$in: [type]}
  if (year) query.year = year
  return Movie.find(query)
}

export const getpDetail = async (id) => {
  const movie = await Movie.findOne({_id: id})
  return movie
}