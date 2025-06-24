import axios from "axios";

 const instance=axios.create({
      baseURL:'https://eventbookingsystem-db.onrender.com/api',
    timeout:20000,
});

export default instance;

