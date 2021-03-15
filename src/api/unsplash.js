import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BS64hj3OiYms_K2sOP556dqrJJoBmHExtx7IwPLl9qs',
    },
});