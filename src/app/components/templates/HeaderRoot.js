import React from 'react'
import { Link } from 'react-router-dom'

class HeaderRoot extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">MyWriting</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Tutorial </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Article</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Inspiration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Story of Success</Link>
                            </li>
                        </ul>
                        <div className="my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderRoot