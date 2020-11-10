import React from 'react';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

function App() {

    const todoData = [
        {
            label: 'Drink cofee',
            important: false,
            id: 1
        }, {
            label: 'Make awesome app',
            important: true,
            id: 2
        }, {
            label: 'Have a lunch',
            important: false,
            id: 3
        }
    ];

    return (
        <div className="App">
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos ={todoData}/>
        </div>
    );
};

export default App;
