import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-2fec6.firebaseio.com/'
})