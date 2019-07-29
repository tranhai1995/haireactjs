import React from 'react';
import axios from 'axios';
class Detail extends React.Component{
    state ={
        person:{},
    }
    async componentDidMount(){
        const id = this.props.match.params.id
        const {data} = await axios.get(`http://5d36d86c86300e0014b647c7.mockapi.io/todos/${id}`);
        this.setState({person: data});
    };
    render(){
        const {person} =this.state;
        return(
            <div className="text-center">
                <h3>Name :&nbsp;{person.name}</h3>
                <h3>ID :&nbsp;{person.id}</h3>
            </div>
        );
    }
}

export default Detail;