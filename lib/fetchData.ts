import axios from 'axios'

const fetchData = async (endpoint = '/') => {
  const instance = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3'
  })

  try {
    const response = await instance.get(endpoint)
    return {
      data: response.data,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: error
    }
  }
}

export default fetchData
