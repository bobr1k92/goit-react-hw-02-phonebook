// import { Component } from "react";
import css from './searchContact.module.css';

const SearchContact = ({value, onSearch}) => (
<div className={css.searchContainer}>
    <label className={css.searchTitle} htmlFor="">Find contacts by name
    <input 
    className={css.searchInput} 
    type="text" value={value}
    name="search"
    onChange={onSearch}/>
    </label>
    
    
</div>
);

export default SearchContact