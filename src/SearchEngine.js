import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './SearchEngine.css';

export default function SearchEngine (props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

function load () {
setLoaded(true);
search();
}


if (loaded) {
return (
<div className="SearchEngine">

 <form className="form-inline input-group" onSubmit={handleSubmit}>
      <input type="search" onChange={handlekeywordChange} className="form-control in-line mr-sm" placeholder="Hey, type a word!"  />
      <button type="submit" className="btn btn-outline-secondary my-sm-0 searchbtn"> Search</button>
    </form>
<Results results={results}/>
</div>);
} else {
load();
return 
}

function handleSubmit (event) {
event.preventDefault();
search();

}

function search () {

// documenttion: https://dictionaryapi.dev/ //

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);

}

function handleResponse (response) {
setResults(response.data[0]);
}



function handlekeywordChange (event) {
 setKeyword(event.target.value);


}







}