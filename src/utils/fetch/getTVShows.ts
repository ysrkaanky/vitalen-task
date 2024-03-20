export async function getTVShows() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIES_TOKEN}`,
    },
    cache: 'no-store',
  } satisfies RequestInit

  const tvShows = await fetch(
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
    options
  )
    .then((response) => response.json())
    .then(({ results }: TVShowDetailsResponse) => {
      return results
    })
    .catch((err) => {
      throw new Error(err)
    })

  return tvShows
}
