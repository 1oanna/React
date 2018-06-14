import React, { Component } from 'react';

const TodoItem = (props) => {
  const { id, description, deadline, done } = props.itm;
  const todoClasses = (done) ? " done " : "";

  return (
    <li className={"todoItem" + todoClasses} onClick={props.onClick}>
      <span className="chkbox">
        <input type="checkbox" checked={done} readOnly={true} />
      </span>
      <span className="descr">{description}</span> 
      <span className="deadline">{deadline}</span>
    </li>
  )
}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = 
      {
      todos: [
        {
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        }
      ]
    }
  }

  todoItemClicked(id) {
    //find which item changed
    const newData = this.state.todos.map( (itm) => {
  
      if (itm.id === id)
        itm.done = !itm.done;

      return itm;
    });

    this.setState({todos: newData});

  }



  render() {
    const todosRenderPart = 
      (this.state.todos.length) ? 
        (<ul className="todos">
          {this.state.todos.map( (itm, i) => {
              return <TodoItem itm={itm} key={i} onClick={this.todoItemClicked.bind(this, itm.id)} />;
          })}
      </ul>) : 
        <p>No Items</p>;

    return (
      <div className="App">
        <h1>Todo List v2</h1>
        <div className="todosCnt">
            {todosRenderPart}
        </div>
      </div>
    );
  }
}

export default App;
