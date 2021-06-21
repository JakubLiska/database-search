import React, {useState, useEffect} from 'react';
import {SearchBox} from '../components/SearchBox';
import {CardList} from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

function App(){
    const [items, setItems] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {            
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setItems(users)});
        console.log(items,searchfield)
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredItems = items.filter((item) =>{
        return item.name.toLowerCase().includes(searchfield.toLowerCase()); 
    })

    return(
        <div className = 'tc'>
            <h1>Wyszukaj produkt</h1>
            <SearchBox searchChange = {onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList item = {filteredItems}/>                
                </ErrorBoundry>
            </Scroll>
        </div>
    )
}


export default App