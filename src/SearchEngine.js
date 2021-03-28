import React, {useState} from "react";
import './SearchEngine.css';

export default function SearchEngine () {
let [keyword, setKeyword] = useState("");

function search (event) {
event.preventDefault();
alert (`Searching for ${keyword}`);
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