import React from 'react';
import axios from 'axios';
import TodoList from "../../components/TodoList";
class HomeScreen extends React.Component{
    state = {
        list: [],
    };
    async componentDidMount(){
        const {data} = await axios.get('http://5d36d86c86300e0014b647c7.mockapi.io/todos');
        this.setState({list: data});
    };
    handleClick= (id) => {
        this.props.history.push(`/detail/${id}`)
    };
    handleChange = event => {
        this.setState({ name: event.target.value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        alert('Thêm Thành Công')
        const user = {
        name: this.state.name,
        complete :true,
    };
        await axios.post('http://5d36d86c86300e0014b647c7.mockapi.io/todos', user )
        this.componentDidMount();
    }
    handleDelete = async (id) =>{
        await axios.delete(`http://5d36d86c86300e0014b647c7.mockapi.io/todos/${id}`)
        alert('Xóa Thành Công')
        this.componentDidMount();
    }
    DeleteChange = event => {
        this.setState({ id: event.target.value });
    }
    DeleteSubmit = event => {
        event.preventDefault();
        alert('Xóa ID Thành Công')
        axios.delete(`http://5d36d86c86300e0014b647c7.mockapi.io/todos/${this.state.id}`);
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-6 text-center">
                        <form onSubmit={this.handleSubmit}>
                                <label>
                                    Person Name:
                                    <input type="text" name="name" onChange={this.handleChange} />&nbsp;&nbsp;
                                </label>
                            <button className="btn-info" type="submit">Add</button>
                        </form>
                    </div>
                    <div className="col-6 text-center">
                        <form onSubmit={this.DeleteSubmit}>
                            <label>
                                Person ID:
                                <input type="text" name="id" onChange={this.DeleteChange} />&nbsp;&nbsp;
                            </label>
                            <button className="btn-info" type="submit">Delete</button>
                        </form>
                    </div>
                </div>
                <TodoList list={this.state.list}
                        onItemClick={this.handleClick}
                        Delete = {this.handleDelete}/>
            </div>
        )
    }
}
export default HomeScreen;