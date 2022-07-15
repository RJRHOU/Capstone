import React from 'react';

const SearchBox = (props) => {
    return(
        <input type='string'
        className='search'
        placeholder={props.placeholder}
        onchange = {props.handlechange}
        />
    )
}

export default SearchBox;