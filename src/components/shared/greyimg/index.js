import React, {Fragment} from "react";
import "./style.css"

const GrayImg = (props) => {
    return (
        <img className={props.gray ? 'gray' : 'clr'} src={props.img_url}></img>
    )
}

export default GrayImg