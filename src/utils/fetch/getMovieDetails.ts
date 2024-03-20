export async function getMovieDetails(id: number) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIES_TOKEN}`,
    },
    cache: 'no-cache',
  } satisfies RequestInit

  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response: MovieDetailsResponse) => response)
    .catch((err) => {
      throw new Error(err)
    })

  return movieDetails
}
