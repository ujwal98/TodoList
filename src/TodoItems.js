import React, { Component } from "react";
 
class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text} <button className='completed_button' onClick={() => this.delete(item.key)}>Completed</button></li>
  }
  constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;