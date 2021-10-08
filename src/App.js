import React, { Component } from 'react'
import './App.css';
import {CardList} from './components/card-list/card-list-component'
import {SearchBox} from './components/search-box/search-box.component'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''

    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters:users }))
  }


  render() {
    const {monsters,searchField} = this.state
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className='App'>
        <h1>MOSTER SEARCH APP</h1>
        <SearchBox placeholder="search monsters"
        handleChange={e => this.setState({searchField:e.target.value})}
        />
        <CardList monsters={filteredMonster}></CardList>
    
      </div>
    )
  }
}



