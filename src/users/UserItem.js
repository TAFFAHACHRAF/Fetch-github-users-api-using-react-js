import React, { Component } from 'react'
import axios from 'axios'

class UserItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        User : {}
    }
  }

  getUser = () =>{
    const url = 'https://api.github.com/users/'+(window.location.pathname).split('/')[2]
    axios(url).
    then(Response =>{
        this.setState({
            User : Response.data
        })
    })
  }
  componentDidMount(){
    this.getUser()
  }
  
  render() {
      const {name,company,location,bio,email,twitter_username,following,followers} = this.state.User
      return (
        <div>
          <div className="card">
              <div className="card-body">
                  <h5 className="card-title">Name : {name}</h5>
                  <p className="card-text">
                     <h5>Company : {company}</h5>
                     <h5>location : {location}</h5>
                     <h5>bio : {bio}</h5>
                     <h5>email : {email}</h5>
                     <h5>twitter_username : {twitter_username}</h5>
                     <h5>following : {following}</h5>
                     <h5>followers : {followers}</h5>
                  </p>
              </div>
          </div>
        </div>
      )
    }
}
export default UserItem


// console.log((window.location.pathname).split('/')[2])
