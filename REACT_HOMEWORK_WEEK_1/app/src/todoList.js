import React from 'react';

import TodoItem from "./todoItem";

export default (props) => {

	const  { items } = props;

	return (
		<ul className="todoList">
			{
				items.map( (itm, i) => <TodoItem title={itm.title} date={itm.dt} key={i} />)
			}
		</ul>
	);
	
}