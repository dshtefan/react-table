import React from 'react'
import PropTypes from "prop-types"

const Table = ({ data, selectColumn, asc, currentCol }) => {
  const isAsc = () => asc ? "▲" : "▼" 
  const isSelect = (colName) => colName + (colName === currentCol ? isAsc() : "")
  const select = (colName) => selectColumn.bind(null, colName)
  return(
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col" onClick={select("id")}>{isSelect("id")}</th>
          <th scope="col" onClick={select("firstName")}>{isSelect("firstName")}</th>
          <th scope="col" onClick={select("lastName")}>{isSelect("lastName")}</th>
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
  selectColumn: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
  currentCol: PropTypes.string.isRequired
}

export default Table