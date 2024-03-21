export default {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.MOVIES_TOKEN}`,
  },
} satisfies RequestInit
