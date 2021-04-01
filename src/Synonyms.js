import React from "react";
import "./Meaning.css";

export default function Synonyms (props) {
if (props.synonyms) {
    return (
<div> <div className="title">Synonym:</div>
    <ul className="Synonyms"> 
        {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;

    })}
    </ul>
</div>
    );

    } else {
    return null;
    }

}
