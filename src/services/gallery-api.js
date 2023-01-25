import axios from "axios";

export async function fetchSearch (q, page) {
    
    const API_KEY = '17988471-599edd7bd30320e243c69934a';
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    
    const searchParams = new URLSearchParams({
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 20,
    })
    
    return await axios(`?key=${API_KEY}&q=${q}&${searchParams}&page=${page}`)
    .then(response => response.data)
}