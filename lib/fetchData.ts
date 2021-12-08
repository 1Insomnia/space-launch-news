import axios from 'axios'

const fetchData = async (endpoint = '/') => {
  const baseURL = 'https://api.spaceflightnewsapi.net/v3'

  try {
    const response = await axios.get(baseURL + endpoint)
    return {
      data: response.data,
      error: null
    }
  } catch (error: any) {
    return {
      data: null,
      error: error.message
    }
  }
}

export const fetchAllArticles = async (q = '') => {
  const { data, error } = await fetchData(`/articles${q}`)

  return {
    articles: data,
    error: error
  }
}

export const fetchAllBlogs = async (q = '') => {
  const { data, error } = await fetchData(`/blogs${q}`)
  return {
    blogs: data,
    error: error
  }
}
