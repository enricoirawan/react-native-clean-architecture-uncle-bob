const BASE_URL = __DEV__
    ? 'https://jsonplaceholder.typicode.com'
    : 'https://jsonplaceholder.typicode.com';

//User
const POST_ENDPOINT = `${BASE_URL}/posts`;
const USER_ENDPOINT = `${BASE_URL}/users`;

export default {
    POST_ENDPOINT,
    USER_ENDPOINT
};
