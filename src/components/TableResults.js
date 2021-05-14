import React from "react";

function TableResults(props) {
  return (
    <tbody>
      {props.empInfos.map((res) => (
        <tr>
          <th scope="row">Image</th>
          <td>Mark</td>
          <td>3305240</td>
          <td>email@email.com</td>
          <td>june 1</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableResults;
