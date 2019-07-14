import React from 'react'
import PropTypes from "prop-types"

const Table = ({ data, selectColumn }) => {
  return(
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col" onClick={selectColumn.bind(null, "id")}>id</th>
          <th scope="col" onClick={selectColumn.bind(null, "firstName")}>firstName</th>
          <th scope="col" onClick={selectColumn.bind(null, "lastName")}>lastName</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
            <tr key={item.id + item.email}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  selectColumn: PropTypes.func.isRequired
}

export default Table