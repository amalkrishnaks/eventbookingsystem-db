import axios from "axios";

const instance=axios.create({
    baseURL:'eventbookingsystem-db.vercel.app
/api/',
    timeout:5000,
});

export default instance;

