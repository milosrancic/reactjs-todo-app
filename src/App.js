import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
    
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== '') {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem)
        }
      });

      this._inputElement.value = '';
    }

    e.preventDefault();
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className="appMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input 
              ref={(a) => this._inputElement = a} 
              type="text"
              placeholder="add new task"
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={(e) => e.target.placeholder = "add new task"}
            />
            <button type="submit">add</button>
          </form>
          <TodoItems 
            entries={this.state.items} 
            delete={this.deleteItem}
          />
        </div>
      </div>
    )
  }
}

export default App;