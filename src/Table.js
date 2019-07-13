import React from 'react'
import PropTypes from "prop-types"

const Table = ({ data }) => {
  return(
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">firstName</th>
          <th scope="col">lastName</th>
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
  data: PropTypes.array.isRequired
}

export default Table