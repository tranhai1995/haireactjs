import React from 'react';
import axios from 'axios';
import TodoList from "../../components/TodoList";
// import Detail from "../TodoDetailScreen";
// import { withRouter } from "react-router";

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
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
        name: this.state.name,
        complete :true
        };
    
        axios.post('http://5d36d86c86300e0014b647c7.mockapi.io/todos', { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render(){
        return(
            <div>
                <form onClick={()=> this.handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
                </form>
               <TodoList list={this.state.list} onItemClick={this.handleClick} />
            </div>
        )
    }
}

export default HomeScreen;