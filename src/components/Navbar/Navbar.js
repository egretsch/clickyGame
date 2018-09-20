import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div  >
        <ul  className="nav nav-pills nav-justified">
            <li className="floatl"><a href="/">Anime Clicky Game</a></li>
            <li style={{ position: "absolute", marginLeft: "25%", width: "50%"}}
                className={props.message.indexOf('incorrectly') !== -1 ?
                    "desc-incorrect" :
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li style={{ position: "absolute", right: 5}}>Score: <span style={{  color: "yellow" }}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navbar;
