import React from 'react';

import './sum-of-tasks.css';

const SumOfTasks = ({toDo, done}) => {
    return (
        <div className='footer'>
            <h2>{toDo} -
                more to do, {done} -
                done</h2>
        </div>

    )
};

export default SumOfTasks;