import React from 'react';

export const SearchBox = ({searchChange}) => {
    console.log(`search change: ${searchChange}`)

    return(
        <div className= 'pa2 c'>
            <input className ='pa3 ba b--green bg-lightest-blue' type='search' placeholder='wyszukaj' onChange={searchChange} />
        </div>
    )
}   