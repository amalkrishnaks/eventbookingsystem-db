import axios from "axios";

const instance=axios.create({
      baseURL:'http://localhost:4000/api/',
    // baseURL:"https://eventbookingsystem-db.onrender.com",
    timeout:5000,
});

export default instance;

