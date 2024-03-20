export async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIES_TOKEN}`,
    },
    cache: 'no-store',
  } satisfies RequestInit

  const movies = await fetch(
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

  return movies
}
