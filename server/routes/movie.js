import mongoose from 'mongoose'
import {getList, getpDetail} from "../service/movie"

@controller('/movies')
export default class MovieRouter {

  @Get('/all')
  async getMovieList (ctx, next) {
    const type = ctx.query.type
    const year = ctx.query.year
    const movies = await getList(type, year)

    ctx.body = {
      data: movies,
      success: true
    }
  }

  @Get('/detail/:id')
  async getMovieDetail (ctx, next) {
    const id = ctx.params.id
    const movie = await getpDetail(id)

    ctx.body = {
      data: movie,
      success: true
    }
  }

}