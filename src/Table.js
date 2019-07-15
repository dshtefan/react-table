import React from 'react'
import PropTypes from "prop-types"

const Table = ({ 
  data, 
  selectColumn, 
  asc, currentCol, 
  firstElement, 
  setFirstElement 
}) => {
  const elAmount = 50

  const isAsc = () => asc ? "▲" : "▼" 
  const isSelect = (colName) => colName + (colName === currentCol ? isAsc() : "")
  const select = (colName) => selectColumn.bind(null, colName)
  const Next = () => setFirstElement(firstElement + elAmount < data.length ? firstElement + elAmount : firstElement)
  const Back = () => setFirstElement(firstElement - elAmount > 0 ? firstElement - elAmount : 0)
  return(
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
          {data.map((item, index) => {
            if (index >= firstElement && index < firstElement + elAmount) 
              return (
                <tr key={item.id + item.email}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              )}
          )}
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
  firstElement: PropTypes.number.isRequired,
  setFirstElement: PropTypes.func.isRequired
}

export default Table