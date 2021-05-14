import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=10";

const API = {
  search: function () {
    return axios.get(APIURL);
  },
};

export default API;