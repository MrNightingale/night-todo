import React from 'react'
import logo from '../images/feather.svg'
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'
import Item from './Item'

import '../styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      itemsList: []
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  addItem = () => {
    this.setState({
      itemsList: [...this.state.itemsList, this.state.value],
      value: ''
    })
  }

  removeItem = item => {
    this.setState({
      itemsList: this.state.itemsList.filter(el => el !== item)
    })
  }

  clearList = () => {
    this.setState({ itemsList: [] })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1>ToDo List</h1>
        </header>
        <main className="main">
          <div className="inputWrapper">
            <input
              type="text"
              className="inputText"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button className="inputBtn btn" onClick={this.addItem}>
              Add
            </button>
          </div>
          <ul className="itemsList">
            {this.state.itemsList.map((item, n) => {
              return (
                <Item
                  item={item}
                  key={`${item}-${n}`}
                  onRemove={this.removeItem}
                />
              )
            })}
          </ul>
          <button className="clearBtn btn" onClick={this.clearList}>
            Clear List
          </button>
        </main>
        <footer className="footer">
          <a
            href="https://twitter.com/slava_soloviov"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <img src={twitter} className="socialIcon" alt="twitter" />
          </a>
          <a
            href="https://github.com/MrNightingale"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <img src={github} className="socialIcon" alt="github" />
          </a>
        </footer>
      </div>
    )
  }
}

export default App
