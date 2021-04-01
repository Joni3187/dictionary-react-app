import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning (props) {
console.log(props.results);

return (
<div className="Meaning">

<h3> {props.meaning.partOfSpeech}</h3>
{props.meaning.definitions.map(function(definition, index) {

return (
<div key={index}>

<p>
<div className="title">Definition:</div>{definition.definition} <br/><br/>
<div className="title">Example:</div><em>"{definition.example}"</em><br/><br/>
<div className="title"></div>
<Synonyms synonyms={definition.synonyms}/>
</p>

</div>
);

})}

</div>
);

}