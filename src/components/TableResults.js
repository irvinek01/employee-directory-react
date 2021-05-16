import React from "react";

// https://stackoverflow.com/questions/50430968/converting-string-date-in-react-javascript
function formatDate(string) {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
}

function TableResults(props) {
  return (
    <tbody>
      {props.empInfos.map((empObj) => (
        <tr key={empObj.key}>
          <th scope="row">
            <img alt="Employee Display" src={empObj.picture} className="img-fluid shadow-lg p-3 mb-3 bg-white rounded" />
          </th>
          <td>
            {empObj.flname}
          </td>
          <td>
            {empObj.nat}
          </td>
          <td>{empObj.contact}</td>
          <td>{empObj.email}</td>
          <td>{formatDate(empObj.dob)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableResults;
