import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      currentItem: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username.trim();
    const currentItem = this.state.currentItem.trim();
    if (!username || !currentItem) return;

    this.setState(state => ({
      items: [...state.items, { username, name: currentItem }],
      currentItem: ''
    }));
  }
  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>
              
            </div>
        </header>
        <div className='container'>
              <section className="add-item">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" aria-label="Your name" onChange={this.handleChange} value={this.state.username} required />
                  <input type="text" name="currentItem" placeholder="What are you bringing?" aria-label="Item to bring" onChange={this.handleChange} value={this.state.currentItem} required />
                  <button>Add Item</button>
                </form>
              </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
                {this.state.items.map((item, index) => (
                  <li key={index}>{item.username} is bringing {item.name}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
