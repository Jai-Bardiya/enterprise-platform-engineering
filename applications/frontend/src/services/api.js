import axios from "axios";

export default axios.create({
    baseURL: "http://15.207.221.191:5000",
    headers: {
        "Content-Type": "application/json"
    }
});
