import { Component } from "react";
import css from './searchContact.module.css'

const SearchContact = ({id}) => (
<div className={css.searchContainer}>
    <label claasName={css.label} htmlFor="">Find contacts by name</label>
    <input type="text" />
    
</div>
);


export default SearchContact