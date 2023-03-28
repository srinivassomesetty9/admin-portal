// import React,{Component} from 'react';
// import axios from 'axios';
// import './Postdata.css';
// import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
// import 'mdbreact/dist/css/mdb.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';


// class Post extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { 
//           users:[]
//         };
//       }
//     componentDidMount(){
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response =>{
//             this.setState({
//               users: response.data
//             })
//             console.log(response.data)
//         })
//     }
//     render() {
//         const{users}=this.state
//       return (
    
//         <div className="card-body">
//         {users.map(user => (<MDBTable small hover key={user.id}>
//       <MDBTableHead> 
//         <tr>
//           <th>User id</th>
//           <th>Name</th>
//            </tr>
//       </MDBTableHead>
//       <MDBTableBody>
//         <tr>
//           <td>{user.id}</td>
//           <td>{user.name}</td>
//         </tr>
//       </MDBTableBody>
//         </MDBTable>))}
//       </div>
         
//       );
//     }
//   }
//   export default Post

//   //GET Request

//..............................................................


import React from 'react'
import axios from 'axios';

 
class Postdata extends React.Component{
 
    constructor(props){
      super(props)
        this.state = {
            users: []
         }
    }
 
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            console.log("DATA",res)
            const users = res.data;
            this.setState({ users });
          }
          )
          
      } 
 
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {/* <h3>Users List</h3><br /> */}
                        <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                            </thead>
                            <tbody>
                        {
                            this.state.users ?
                                 
                                    this.state.users.map((user,i)=>
                                        <tr key={user.name}>
                                            <td>{++i}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.city}</td>
                                        </tr>
                                    )
                            :
                            null
                        }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default Postdata;