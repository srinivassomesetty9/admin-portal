import React,{Component} from 'react';
import axios from 'axios';
import 'mdbreact/dist/css/mdb.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


class Accountdata extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          users:[]
        };
      }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({
              users: response.data
            })
            // console.log(response.data,"DATA")
        })
    }
    render() {
        const{users}=this.state
      return (
          <div>
            {users.name}
          </div>
      );
    }
  }
  export default Accountdata

  //GET Request