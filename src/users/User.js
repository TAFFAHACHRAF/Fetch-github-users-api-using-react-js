import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
    const {avatar_url,login,repos_url} = this.props.user
    const loginPath = "/users/"+login
    return (
      <div>
        <div className="card">
            <img src={avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <p className="card-text">
                    <Link to={loginPath} className='btn btn-success'>
                      Show more
                    </Link>
                    <Link to={repos_url} className='btn btn-warning'>
                      Reposetory
                    </Link>
                  </p>
            </div>
        </div>
      </div>
    )
  }
}

export default User