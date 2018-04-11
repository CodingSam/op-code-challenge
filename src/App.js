import React, { Component } from 'react'
import Accordion from './components/accordion'

class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="header">
          <h1>Selaile tietojasi</h1>
        </header>
        <Accordion />
      </div>
    )
  }
}

export default App
