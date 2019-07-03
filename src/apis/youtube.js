import axios from 'axios';

const KEY = 'AIzaSyAm_lvuDiqKBreUMll-NeKjKr5Z9cE_rw0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY,  
        alt:'json'
    }
});
