import React from "react";

// https://stackoverflow.com/questions/50430968/converting-string-date-in-react-javascript
function formatDate(string) {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
}

function TableResults(props) {
  return (
    <tbody>
      {props.empInfos.map((eachEmp) => (
        <tr key={eachEmp.login.uuid}>
          <th scope="row">
            <img alt="Dog" src={eachEmp.picture.large} className="img-fluid" />
          </th>
          <td>
            {eachEmp.name.first}, {eachEmp.name.last}
          </td>
          <td>{eachEmp.cell}</td>
          <td>{eachEmp.email}</td>
          <td>{formatDate(eachEmp.dob.date)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableResults;
