import React from 'react'
import { Link } from 'react-router-dom'
function Nav(){
    return(
        <div className='mt-1 p-2'> 
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/users" className="navbar-brand">
                    Github Users
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-end" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Nav