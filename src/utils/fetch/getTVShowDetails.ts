export async function getTVShowDetails(id: number) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIES_TOKEN}`,
    },
  }

  const details = await fetch(
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
  return details
}
