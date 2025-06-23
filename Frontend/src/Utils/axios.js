import axios from "axios";

 const instance=axios.create({
      baseURL:'https://eventbookingsystem-db.onrender.com/api',
    timeout:5000,
});

export default instance;

