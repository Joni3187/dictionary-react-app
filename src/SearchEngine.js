import React, {useState} from "react";
import axios from "axios";
import './SearchEngine.css';

export default function SearchEngine () {
let [keyword, setKeyword] = useState("");


function handleResponse (response) {
console.log(response.data[0]);

};

function search (event) {
event.preventDefault();

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);

}

function handlekeywordChange (event) {
 setKeyword(event.target.value);


}



return (

<div className="SearchEngine">

 <form className="form-inline input-group" onSubmit={search}>
      <input type="search" onChange={handlekeywordChange} className="form-control in-line mr-sm" placeholder="Enter a Word" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button type="submit" className="btn btn-outline-secondary my-sm-0 searchbtn"> Search</button>
    </form>

</div>);



}