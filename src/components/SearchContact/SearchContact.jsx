// import { Component } from "react";
import css from './searchContact.module.css';

const SearchContact = ({value, onSearch}) => (
<div className={css.searchContainer}>
    <label className={css.searchLabel} htmlFor="">Find contacts by name</label>
    <input 
    className={css.searchInput} 
    type="text" value={value}
    name="search"
    onChange={onSearch}/>
    
    
</div>
);

export default SearchContact