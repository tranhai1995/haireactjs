/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {

    const {name, complete, onItemClick} = props;
    return(
        <div onClick={onItemClick} style={{cursor: 'pointer'}} className={complete ? 'completed' : ''}>
            {name}
        </div>
    )
}

TodoItem.PropTypes = {
    name: PropTypes.array.isRequired,
    complete: PropTypes.bool.isRequired,
    onItemClick: PropTypes.func.isRequired,
};

export default TodoItem;