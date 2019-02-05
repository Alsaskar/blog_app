import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class HeaderDashboard extends React.Component{

    constructor(props){
        super(props)
        this.state = { redirect: false }
    }

    setRedirect(){
        this.setState({
          redirect: true
        })
    }
    
    renderRedirect(){
        if (this.state.redirect) {
          return <Redirect to='/login'/>
        }
    }

    Logout(){
        sessionStorage.removeItem('myToken') // menghapus token yang ada pada session 
        this.setRedirect()
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MyWriting</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/list-post">List Post </Link>
                            </li>
                        </ul>
                        <div className="my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.props.obj.firstname}
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="#">Profil</Link>
                                    <Link className="dropdown-item" to="#">Change Password</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => this.Logout()} href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderDashboard