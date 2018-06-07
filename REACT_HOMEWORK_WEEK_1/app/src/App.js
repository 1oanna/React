import React, { Component } from 'react';

import TodoList from "./todoList";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        {title: "Get out of bed",   dt: new Date(2017, 8, 13)   },
        {title: "Brush teeth",    dt: new Date(2017, 8, 14)   },
        {title: "Eat breakfast",  dt: new Date(2017, 8, 15) }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>My Todo List</h1>
        </header>
        <main>
          <TodoList items={this.state.todoItems} />
        </main>
      </div>
    );
  }
}

export default App;
