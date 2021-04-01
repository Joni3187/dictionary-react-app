import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";


export default function Results (props) {
if (props.results) {

    return  (

        <div className="Results"> 
        <h2>{props.results.word}</h2>
<section>
            {props.results.phonetics.map(function(phonetic, index) {
            return (
                <div key={index}>
                <Phonetic phonetic={phonetic}/>
                </div>
                );
            })}
</section> 
<section>
            {props.results.meanings.map(function(meaning, index) {
            return (
                <div key={index}>
                <Meaning meaning={meaning}/>
                </div>
                );
            })}
</section>
</div>
     );} else {

return null;
}


}

