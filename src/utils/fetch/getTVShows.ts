import options from './options'

export async function getTVShows() {
  return fetch(
    'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
    options
  )
    .then((response) => response.json())
    .then(({ results }: TVShowListDetailsResponse) => {
      return results
    })
    .catch((err) => {
      throw new Error(err)
    })
}
