import React from 'react';

const formatNiceDate = (d) => d.toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'});

export default (props) => <li className = "todoItem">{props.title}, <em>{formatNiceDate(props.date)}</em></li>;