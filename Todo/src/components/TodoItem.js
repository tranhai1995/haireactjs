/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';
function TodoItem(props) {
    const {name, complete, onItemClick , Delete} = props;
    return(
        <table className="table">
            <tbody>
                <tr>
                    <td>
                        <div className="row text-center">
                            <div className="col-6">
                                <p onClick={onItemClick} style={{cursor: 'pointer'}} className={complete ? 'completed' : ''}>
                                {name}
                                </p>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-danger " type="submit" onClick={Delete}>Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    Delete: PropTypes.func.isRequired,
    complete: PropTypes.bool.isRequired,
    onItemClick: PropTypes.func.isRequired,
};
export default TodoItem;