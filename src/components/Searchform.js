import React from "react";

function Searchform(props) {
  return (
    <div className="bg-dark d-flex text-white ">
      <div className="col">
        <div className="row justify-content-center ">
          <label htmlFor="language">
            Type in a name inside this search box/Sortable by clicking Name, Nationality, Email
          </label>
        </div>
        <div className="row justify-content-center ">
          <form className="search">
            <div className="form-group">
              <input
                className="form-control"
                size="27"
                type="text"
                placeholder="eg. John Doe"
                name="search"
                id="search"
                value={props.search}
                onChange={props.handleInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Searchform;
