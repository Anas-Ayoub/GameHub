import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '5f6561a64dbd4d149b83c8710faf580e'
    }
})