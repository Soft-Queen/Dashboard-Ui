import axios from 'axios'

export const getRequest = async (url: any) => {
    const result = await axios
        .get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response)
        .catch((error) => {
            throw error.response?.data || error.message
        })
    return result
}

export const deletePost = async (id: number) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  };
  