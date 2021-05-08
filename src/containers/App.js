import React, {Component} from 'react';
import {SearchBox} from '../components/SearchBox';
import {CardList} from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component{
    constructor(){
        super()
        this.state = {
            items: [],
            searchfield: ''
        }
        console.log("constructor")
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => this.setState({items:users}))
    }

    onSearchChange = (event) => {
        return this.setState({searchfield: event.target.value})
    }

    render() {
        const {items, searchfield} = this.state

        const filteredItems = items.filter(item =>{
            return item.address.street.toLowerCase().includes(searchfield.toLowerCase()); 
        })
        return(
            <div className = 'tc'>
                <h1>Wyszukaj produkt</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList item = {filteredItems}/>                
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App