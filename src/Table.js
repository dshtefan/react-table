import React from 'react'
import PropTypes from "prop-types"

const Table = ({ 
  data, 
  selectColumn, 
  asc, 
  currentCol, 
  firstEl, 
  setFirstEl,
  elAmount
}) => {
  const isAsc = () => asc ? "▲" : "▼" 
  const isSelect = (colName) => colName + (colName === currentCol ? isAsc() : "")
  const select = (colName) => selectColumn.bind(null, colName)

  const Next = () => 
    setFirstEl(firstEl + elAmount < data.length ? firstEl + elAmount : firstEl)
  const Back = () => 
    setFirstEl(firstEl - elAmount > 0 ? firstEl - elAmount : 0)

  return (
    <div>
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
          {data.filter((_el, index) => index >= firstEl && index < firstEl + elAmount)
            .map((item) => (
              <tr key={item.id + item.email}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button onClick={Back.bind(null, null)}>Back</button>
      <button onClick={Next.bind(null, null)}>Next</button>
    </div>
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  selectColumn: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
  currentCol: PropTypes.string.isRequired,
  firstEl: PropTypes.number.isRequired,
  setFirstEl: PropTypes.func.isRequired,
  elAmount: PropTypes.number.isRequired
}

export default Table