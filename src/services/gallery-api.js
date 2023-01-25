import axios from "axios";

export async function fetchSearch (q, page) {
    
    const API_KEY = '17988471-599edd7bd30320e243c69934a';
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    
    const searchParams = new URLSearchParams({
        image_type: "photo",
        orientation: "horizontal",
        per_page: 12,
    })
    
    return await axios(`?q=${q}&page=${page}&key=${API_KEY}&${searchParams}`)
    .then(response => response.data)
}