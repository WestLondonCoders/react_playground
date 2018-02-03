import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url:'https://api.coinmarketcap.com/v1/ticker/',
      allTheCoins: []
    }
  }

  componentDidMount() {
    this.fetchData(this.state.url)
  }

  fetchData(url) {
    fetch(url)
      .then(data => data.json())
      .then(json => this.setState({allTheCoins: json}))
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>       
    )
  }
}

export default App;
