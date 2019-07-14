import React from "react"
import PropTypes from "prop-types"

const Homepage = ({ setNumberOfRows, setCurrentComponent }) => {
  const homepageStyle = {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(45deg, #fcff58, #f99191)",
  }
  const pageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
  const blockStyle = {
    height: "120px", 
    width: "120px",
    display: "inline-block",
    backgroundColor: "#11e29d",
    margin: "40px",
    borderRadius: "5%", 
    textAlign: "center",
    lineHeight: "120px"
  }

  const onClick = (number) => {
    setNumberOfRows(number)
    setCurrentComponent(`Loading`)
  }
  
  return (
    <div className="homepage" style={homepageStyle}>
      <div className="blocs" style={pageStyle}>
        {[32, 1000].map((number) => 
          <div className="block" key={number} style={blockStyle} onClick={onClick.bind(null, number)}>
            {number + " rows"}
          </div>
        )}
      </div>
    </div>
  )
}

Homepage.propTypes  = {
  setNumberOfRows: PropTypes.func.isRequired,
  setCurrentComponent: PropTypes.func.isRequired
}

export default Homepage