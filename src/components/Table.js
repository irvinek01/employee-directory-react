import React, { Component } from "react";
import Searchform from "./Searchform";
import TableResults from "./TableResults";
import API from "../utils/API";

class Results extends Component {
  state = {
    empRoster: [],
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
    // console.log(this.state.empRoster);
    return (
      <table className="table table-striped table-bordered table-hover ">
        <thead>
          <tr>
            <th scope="col">Display Picture</th>
            <th scope="col">Name(First, Last)</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <TableResults empInfos={this.state.empRoster} />
      </table>
    );
  }
}
export default Results;
