import React from "react";

function TableColumns(props) {
  return (
    <thead className="thead-light">
            <tr>
              <th scope="col">Display Picture</th>
              <th scope="col" data-column="flname" onClick={props.handleSort} style={{ cursor: 'pointer' }}>Name(First, Last)</th>
              <th scope="col">Nationality(Country Code/Country)</th>
              <th scope="col">Phone</th>
              <th scope="col" data-column="email" onClick={props.handleSort} style={{ cursor: 'pointer' }}>Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
  );
}

export default TableColumns;
