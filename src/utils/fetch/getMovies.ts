import options from './options'

export async function getMovies() {
  return fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    options
  )
    .then((response) => response.json())
    .then(({ results }: MovieListDetailsResponse) => {
      return results
    })
    .catch((err) => {
      throw new Error(err)
    })
}
