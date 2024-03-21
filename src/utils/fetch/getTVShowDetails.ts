import options from './options'

export async function getTVShowDetails(id: number) {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?append_to_response=credits&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response: TVShowDetailsResponse) => {
      return response
    })
    .catch((err) => {
      throw new Error(err)
    })
}
