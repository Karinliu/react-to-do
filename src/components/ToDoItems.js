import React, { Component } from 'react'
import Trash from '../assets/trash.png';

class TodoItems extends Component {
  
  createTasks = item => {
    return (
      <li>
      	<p key={item.key}>{item.text} 
      		<button class="btn" onClick={() => this.props.deleteItem(item.key)}><img src={Trash} alt=""/></button>
      	 </p>
      </li>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default TodoItems