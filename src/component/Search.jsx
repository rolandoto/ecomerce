import React from 'react'

export const Search = ({serch,searchinput,handeSerach}) => {
    return (
        <div>
               <h4>busca tu ropa favorite</h4>
               <input type="text" value={serch} ref={searchinput} onChange={handeSerach}/>
        </div>
    )
}
