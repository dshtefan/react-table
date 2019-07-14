import React, { useState, useEffect } from "react"
import axios from "axios"
import _ from "lodash"

import Table from "./Table"
import Homepage from "./homepage/Homepage"
import Spinner from "./spinner/Spinner"

const App = () => {
  const [ data, setData ] = useState([])
  const [ asc, setAsc ] = useState(true)
  const [ currentCol, setCurrentCol ] = useState("id")
  const [ numberOfRows, setNumberOfRows ] = useState(0)
  const [ currentComponent, setCurrentComponent ] = useState(`Homepage`)
  
  useEffect(() => {
    axios.get(
      `http://www.filltext.com/?rows=${numberOfRows}&delay=1&id={number|1000}&firstName={firstName}&` + 
      `lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&` +
      `address={addressObject}&description={lorem|32}`
    ).then((res) => {
      setData(_.orderBy(res.data, "id", "asc"))
      console.log(res.data)
      if (numberOfRows !== 0) 
        setCurrentComponent(`Table`)
    })
  }, [numberOfRows])

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
    <div style={{width: "100%", height: "100%"}}>
      {(() => {
        switch(currentComponent) {
          case `Homepage`:
            return <Homepage 
            setNumberOfRows={setNumberOfRows}
            setCurrentComponent={setCurrentComponent}
            />
          case `Table`:
            return <Table 
              data={data} 
              selectColumn={selectColumn} 
              asc={asc}
              currentCol={currentCol}
            />
          default:
              return <Spinner />
        }
      })()}
    </div>
  )
}

export default App