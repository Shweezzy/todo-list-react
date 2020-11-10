import React from 'react';

import AppHeader from './components/app-header/';
import SearchPanel from './components/search-panel/';
import TodoList from './components/todo-list/';
import ItemStatusFilter from './components/item-status-filter/';
import SumOfTasks from './components/sum-of-tasks/'

import './index.css';

const App = () => {

    const todoData = [
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
    ];

    return (
        <div className="todo-app">
            <AppHeader/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData}/>
            <div><SumOfTasks toDo={1} done={3}/></div>
        </div>
    );
};

export default App;
