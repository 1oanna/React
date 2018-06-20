import React, { Component } from 'react';



const TodoItem = (props) => {

	const { id, deadline, description, descriptionEdit, done, isEditing } = props.item;

	const todoClasses = (done) ? " done " : "";
	let editButton = <button className="btnSmall edit" onClick={e => props.onStartEditItem(e, id)}>Edit</button>;
	let titleDisplay = description;

	if (isEditing) {
		
		titleDisplay = <input type="text" onChange={(e) => props.onTextEditItem(e, id)} value={descriptionEdit} />;

		editButton = (
			<div className="inlineButtons">
				<button className="btnSmall update" onClick={ e => props.onUpdateItem(e, id)}>Update</button>
				<button className="btnSmall" onClick={ e => props.onCancelEditItem(e, id)}>Cancel</button>
			</div>
		);
	}

	return (
		<li className={"todoItem" + todoClasses}>
			<div className="cell" onClick={props.onTodoItemClicked.bind(this, id)}>
				<input type="checkbox" checked={done} readOnly={true} />
			</div>
			<div className="cell descr">
				<span className="title">{titleDisplay}</span>
				<span className="deadline">{deadline}</span>
			</div>
			<div className="cell">
				{editButton}
				<button className="btnSmall remove" onClick={ e => props.onRemoveItem(e, id)}>Remove</button>
			</div>
		</li>
	)
}


const TodoList = (props) => {

	if (props.items.length === 0)
		return <p className="todoList">There are no Items</p>;

	return (
		<ul className="todoList">
			{props.items.map( (itm, i) => {
				return (
					<TodoItem 
						item={itm} key={i}
						onRemoveItem={props.onRemoveItem} 
						onStartEditItem={props.onStartEditItem} 
						onUpdateItem={props.onUpdateItem}
						onCancelEditItem={props.onCancelEditItem}
						onTextEditItem={props.onTextEditItem}
						onTodoItemClicked={props.onTodoItemClicked}
					/>
				)
			})}
		</ul>
	);
}


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newTaskText: '',
			nextID: 4,
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

	onNewTaskChanged(e) {
		const _t = e.target.value;
		this.setState({newTaskText: _t});
	}

	onAddNew(e) {
		e.preventDefault();

		const { nextID, todos, newTaskText } = this.state;

		if (newTaskText === "")
			return;

		this.setState({
			"newTaskText": '',
			"nextID": nextID + 1,
			"todos": [
				...todos,
				{
					"id": nextID,
					"description": newTaskText,
					"deadline": "2017-09-09",
					"done": false
				}
			]
		})
	}

	onRemoveItem(e, id) {

		//get removed item
		const remainingTodos = this.state.todos.filter( itm => {
			if (itm.id !== id)
				return itm;
		});

		//console.log(remainingTodos);

		this.setState({todos: remainingTodos});
	}

	onStartEditItem(e, id) {
		const remainingTodos = this.state.todos.map( itm => {
			if (itm.id === id) {
				itm.isEditing = true;
				itm.descriptionEdit = itm.description;
			}

			return itm;
		});

		this.setState({todos: remainingTodos});
	}

	onUpdateItem(e, id) {
		const remainingTodos = this.state.todos.map( itm => {
			if (itm.id === id) {
				itm.isEditing = false;
				itm.description = itm.descriptionEdit;
			}

			return itm;
		});

		this.setState({todos: remainingTodos});
	}

	onCancelEditItem(e, id) {
		const remainingTodos = this.state.todos.map( itm => {
			if (itm.id === id) {
				itm.isEditing = false;
				itm.descriptionEdit = null;
			}

			return itm;
		});

		this.setState({todos: remainingTodos});
	}

	onTextEditItem(e, id) {
		const remainingTodos = this.state.todos.map( itm => {
			if (itm.id === id) {
				itm.descriptionEdit = e.target.value;
			}

			return itm;
		});

		this.setState({todos: remainingTodos});
	}

	onTodoItemClicked(id) {
		//find which item changed
		const newData = this.state.todos.map( (itm) => {
	
			if (itm.id === id)
				itm.done = !itm.done;

			return itm;
		});

		this.setState({todos: newData});
	}

	render() {
		return (
			<div className="App">
				<header>
					<h1>My Todo List</h1>
				</header>
				<main className="stage">
					<div className="addNewCnt">
						<div>
							<label>Enter description</label>
							<input type="text" className="txtNew" value={this.state.newTaskText} onChange={this.onNewTaskChanged.bind(this)} />
						</div>
						<button className="btnAddNew" onClick={this.onAddNew.bind(this)}>Add New</button>
					</div>

					<div className="todoCnt">
						<TodoList 
							items={this.state.todos} 
							onRemoveItem={this.onRemoveItem.bind(this)}
							onStartEditItem={this.onStartEditItem.bind(this)}
							onTextEditItem={this.onTextEditItem.bind(this)}
							onUpdateItem={this.onUpdateItem.bind(this)}
							onCancelEditItem={this.onCancelEditItem.bind(this)}
							onTodoItemClicked={this.onTodoItemClicked.bind(this)}
						/>
					</div>
				</main>
				
			</div>
		);
	}
}

export default App;
