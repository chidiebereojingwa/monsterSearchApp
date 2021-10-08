import React, { Component } from 'react'
import './App.css';
import {CardList} from './components/card-list/card-list-component'

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
        <h1>how  are you</h1>
        <input type="search" placeholder='search monsters' onChange={
          e => this.setState({searchField: e.target.value})

       }/>
        <CardList monsters={filteredMonster}></CardList>
    
      </div>
    )
  }
}



