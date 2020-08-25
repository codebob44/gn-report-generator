import axios from "axios";

export default axios.create({
  // url of backend server
  baseURL: "http://localhost:4000/api/v1/customers",
});