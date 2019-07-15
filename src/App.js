import React, { useState, useEffect } from "react"
import axios from "axios"
import _ from "lodash"

import Table from "./Table"
import Homepage from "./homepage/Homepage"
import Spinner from "./spinner/Spinner"

const App = () => {
  const [ data, setData ] = useState([]) //Данные для отображения
  const [ asc, setAsc ] = useState(true) //Вид сортировки
  const [ currentCol, setCurrentCol ] = useState("id") //Текущая колонка
  const [ numberOfRows, setNumberOfRows ] = useState(0) //Кол-во строк для загрузки
  const [ currentComponent, setCurrentComponent ] = useState(`Homepage`) 
  const [ firstElement, setFirstElement ] = useState(0) //Первый элемент для отображения
  const [ elAmount ] = useState(50) //Кол-во элементов на странице

  const appStyle = {
    width: "100%", 
    minHeight: "100vh",
    background: "linear-gradient(45deg, #fcff58, #f99191)"
  }

  useEffect(() => {
    axios.get(
      `http://www.filltext.com/?rows=${numberOfRows}&delay=1&id={number|1000}&firstName={firstName}&` + 
      `lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&` +
      `address={addressObject}&description={lorem|32}`
    ).then((res) => {
      setData(_.orderBy(res.data, "id", "asc"))
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
    <div style={appStyle}>
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
              firstElement={firstElement}
              setFirstElement={setFirstElement}
              elAmount={elAmount}
            />

          default:
              return <Spinner />
        }
      })()}
    </div>
  )
}

export default App