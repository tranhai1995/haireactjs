import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


function TodoList(props) {
    const list = props.list;
    const ListItem = list.map((item) =>
        <TodoItem key={item.id} name={item.name} complete={item.complete} onItemClick={() => props.onItemClick(item.id)} />
    )
    return(
        <div>{ListItem}</div>
    )
}

// eslint-disable-next-line react/no-typos
TodoList.PropTypes = {
    list: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired,
};

export default TodoList;