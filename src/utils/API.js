import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=10&nat=us,dk,es,fi,fr,gb,ie,nl,nz,tr";

const API = {
  getFromAPI: function () {
    return axios.get(APIURL);
  },
};

export default API;