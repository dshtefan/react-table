import React, { useState, useEffect } from "react"
import axios from "axios"
import _ from "lodash"

import Table from "./Table"
import Spinner from "./spinner/Spinner"

const App = () => {
  const [ loading ] = useState(true)
  const [ isloading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState([])
  const [ asc, setAsc ] = useState(true)
  const [ currentCol, setCurrentCol ] = useState("id")
  
  useEffect(() => {
    axios.get(
      "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&" + 
      "lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&" +
      "address={addressObject}&description={lorem|32}"
    ).then((res) => {
      setData(_.orderBy(res.data, "id", "asc"))
      setIsLoading(false)
    })
  }, [loading])

  const selectColumn = (colName) => {
    let copyData = [...data]
    let order = true 
    if (currentCol === colName){
      order = !asc;
      setAsc(!asc)
    } else {
      setAsc(true)
    }
    setCurrentCol(colName)
    setData(_.orderBy(copyData, colName, order === true ? "asc" : "desc"))
  }

  return (
    <div>
      {isloading ? (<Spinner />) :
      (<Table 
        data={data} 
        selectColumn={selectColumn} 
        asc={asc}
        currentCol={currentCol}
      />)}
    </div>
  )
}

export default App