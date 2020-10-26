import axios from 'axios';

const auth = axios.create({
    baseURL: 'https://auth.agoratem.com.br/api/v1'
})

export default auth;