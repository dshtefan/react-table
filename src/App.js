import React,{ useState, useEffect } from "react"
import axios from "axios"
import Table from "./Table"

const App = () => {
  const [ loading ] = useState(true)
  const [ data, setData ] = useState([])
  
  useEffect(() => {
    axios.get(
      "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&" + 
      "lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&" +
      "address={addressObject}&description={lorem|32}"
    ).then((res) => setData(res.data))
  }, [loading])

  return (
    <div>
      <Table data={data} />
    </div>
  )
}

export default App