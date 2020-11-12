import React, {Component} from 'react';

import AppHeader from './components/app-header/';
import SearchPanel from './components/search-panel/';
import TodoList from './components/todo-list/';
import ItemStatusFilter from './components/item-status-filter/';
import SumOfTasks from './components/sum-of-tasks/'

import './index.css';

export default class App extends Component {

    state = {
        todoData: [
            {
                label: 'Drink Coffee',
                important: false,
                id: 1
            }, {
                label: 'Make Awesome App',
                important: true,
                id: 2
            }, {
                label: 'Have a lunch',
                important: false,
                id: 3
            }
        ]
    };

    // deleteItem = (id) => {     this.setState(({todoData}) => {         const idx
    // = todoData.findIndex((el) => el.id === id)         const newTodoData = [
    //   ...todoData.slice(0, idx),             ...todoData.slice(idx + 1)    ];
    //     return {todoData: newTodoData}     }); };
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const newTodoData = todoData.filter((item) => item.id !== id)
            return {todoData: newTodoData}
        });
    };
    render() {
        return (
            <div className="todo-app">
                <AppHeader/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={this.state.todoData} deleteTask={this.deleteItem}/>
                <div><SumOfTasks toDo={1} done={3}/></div>
            </div>
        )
    }
}
