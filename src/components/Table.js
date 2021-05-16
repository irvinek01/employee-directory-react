import React, { Component } from "react";
import API from "../utils/API";
import Searchform from "./Searchform";
import TableColumns from "./TableColumns";
import TableResults from "./TableResults";

class Results extends Component {
  state = {
    empRoster: [],
    empFilter: [],
    search: "",
    flname: 1,
    email: 1,
  };

  AllEmp = async () => {
    let empRoster = [];
    await API.getFromAPI()
      .then((res) => {
        empRoster = res.data.results.map((result) => {
          return {
            key: result.login.uuid,
            picture: result.picture.large,
            flname: result.name.first + ", " + result.name.last,
            nat: result.nat + ", " + result.location.country,
            contact: result.cell,
            email: result.email,
            dob: result.dob.date,
          };
        });
      })
      .catch((err) => console.log(err));
    return empRoster;
  };

  componentDidMount = async () => {
    const empRoster = await this.AllEmp();
    await this.setState({ empRoster, empFilter: empRoster });
    // console.log(empRoster);
  };

  handleInputChange = async (event) => {
    const value = event.target.value.toLowerCase();
    if (value) {
      const empSearchList = await this.state.empRoster.filter(
        (empObj) =>
          empObj.flname.toLowerCase().includes(value) ||
          empObj.email.toLowerCase().includes(value)
      );
      await this.setState({
        search: value,
        empFilter: empSearchList,
      });
    }
  };

  handleSort = async (event) => {
    const colClick = event.target.getAttribute("data-column");
    console.log(colClick);
    let sorted = this.state.empFilter.map((e) => e);
    // console.log(sorted);
    sorted.sort((a, b) => {
      if (a[colClick] > b[colClick]) {
        return 1 * this.state[colClick];
      } else if (a[colClick] < b[colClick]) {
        return -1 * this.state[colClick];
      }
      return 0;
    });
    this.setState({ empFilter: sorted, [colClick]: this.state[colClick] * -1 });
  };

  render() {
    // console.log(this.state.empRoster);
    return (
      <div>
        <Searchform
          handleInputChange={this.handleInputChange}
          search={this.search}
        />
        <table className="table table-striped table-bordered table-hover ">
          <TableColumns handleSort={this.handleSort} />
          <TableResults empInfos={this.state.empFilter} />
        </table>
      </div>
    );
  }
}
export default Results;
