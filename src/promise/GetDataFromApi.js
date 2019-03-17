import Axios from "axios";

const GetDataFromApi = (url) => {
    const API = Axios.get(url)
        .then(request => request.data);
    return API;
};

export default GetDataFromApi;
