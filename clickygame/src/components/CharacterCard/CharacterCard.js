import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card">
        <a inClick={() => props.selectCharacter(props.character)}>
            <div className="img-container">
                <img alt={props.character} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.character}
                    </li>
                </ul>
            </div>
        </a>
    </div>
);

export default CharacterCard;