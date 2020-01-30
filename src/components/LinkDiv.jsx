import React from "react"

const LinkDiv = (props) => {
    console.log(props)
    return (
        <div className="nav-linkDiv-div">
            {props.children}
        </div>
    )
}

export default LinkDiv