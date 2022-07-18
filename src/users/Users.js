import React, { Component } from 'react'
import User from './User'
import SearchUsers from './SearchUsers'
import axios from 'axios'

class Users extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        Users : []
    }
  }

  getUsers = () => {
    axios('https://api.github.com/users').
    then(Response =>{
        this.setState({
            Users : Response.data
        })
    })
  }
  componentDidMount(){
    this.getUsers()
  }
  SearchUserFromGit = (data) => {
     if(data != ''){
        axios.get(`https://api.github.com/search/users?q=${data}`).
        then(Response =>{
            this.setState({
                Users : Response.data.items
            })
        })
     }
  }

  render() {
    return (
      <div>
        <div className='row my-2'>
            <div className='col-md-12'>
                    <SearchUsers getUserSearch={this.SearchUserFromGit} />
            </div>
        </div>
        <div className='row'>
            {this.state.Users.map(user => (
                <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12" key={user.id}>
                    <User user={user} />
                </div>
            ))}
        </div>
      </div>
    )
  }
}

export default Users