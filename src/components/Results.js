import React, { Component } from "react";
import Searchform from "./Searchform";
import API from "../utils/API";

class Results extends Component {
  state = {
    empRoster: {},
    search: "",
  };

  // When the component mounts, get the results from API
  async componentDidMount() {
    try {
      const res = await API.getFromAPI();
      console.log(res.data.results);
      this.setState({
        empRoster: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <table className="table table-striped table-bordered table-hover ">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Image</th>
            <td>Mark</td>
            <td>3305240</td>
            <td>email@email.com</td>
            <td>june 1</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Results;
