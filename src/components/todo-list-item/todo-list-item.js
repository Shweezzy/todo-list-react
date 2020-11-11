import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    //class fields

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState({done: true});
    };

    isImportant = () => {
        this.setState({important: true});
        console.log('a')
    };

    render() {
        const {label} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }
        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={this.onLabelClick}>
                    {label}
                </span>

                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"/>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.isImportant}>
                    <i className="fa fa-exclamation"/>
                </button>

            </span>
        )
    };

};
