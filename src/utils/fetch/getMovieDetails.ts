import options from './options'

export async function getMovieDetails(id: number) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response: MovieDetailsResponse) => response)
    .catch((err) => {
      throw new Error(err)
    })
}
