import React from 'react'
import HeaderRoot from '../templates/HeaderRoot'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import { required, email } from '../../lib/validations'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
require('../../../../style/auth.css')
import Spinner from 'react-spinner-material'

class Register extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            message: '',
            redirect: false,
            spinner: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this);
    }

    setRedirect(){
        this.setState({
            redirect: true
        })
    }
    
    renderRedirect(){
        if (this.state.redirect) {
          return <Redirect to='/dashboard'/>
        }
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()

        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3000/user/register', user)
        .then(res => {
            if(res.status === 200){
                setTimeout(() => {
                    if(res.data.cek_email === true){
                        this.setState({message: 'Email is already exists', spinner: false})
                    }else{
                        this.setState({message: 'You have successfully registered', spinner: false})
                    }
                }, 2000)
            }

            this.setState({spinner: true})
        })
    }

    componentDidMount(){
        document.title = "MyWriting - Register Now"

        axios.get('http://localhost:3000/dashboard?token='+sessionStorage.getItem('myToken'))
        .then(res => {
            // jika user sudah login, maka tidak bisa akses halaman login
            // atau akan diredirect ke halaman dashboard
            if(res.data.loggedin === true){
                this.setRedirect()
            }
        })
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                <HeaderRoot/>
                <div className="container" style={{marginTop: '3%'}}>
                    <h2>Register Now</h2><hr/>
                    <center><Spinner size={50} spinnerColor={"#333"} spinnerWidth={3} visible={this.state.spinner}/></center><br/>
                    <div className="card">
                        <div className="card-body">
                            {this.state.message === '' ? '' : <div className="alert alert-success">{this.state.message}. <Link to="/login" className="alert-link">Login</Link></div>}
                            <div className="row">
                                <div className="col-md-7">
                                    <Form method="post" onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstname">Firstname</label>
                                                    <Input type="text"
                                                           name="firstname" 
                                                           id="firstname" 
                                                           className="input" 
                                                           placeholder="Firstname"
                                                           onChange={this.handleChange}
                                                           validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastname">Lastname</label>
                                                    <Input type="text"
                                                           name="lastname" 
                                                           id="lastname" 
                                                           className="input" 
                                                           placeholder="Lastname"
                                                           onChange={this.handleChange}
                                                           validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Input type="text"
                                                   name="email" 
                                                   id="email" 
                                                   className="input" 
                                                   placeholder="Email"
                                                   onChange={this.handleChange}
                                                   validations={[required, email]}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <Input type="password"
                                                    name="password"
                                                    id="password"
                                                    className="input"
                                                    placeholder="Password"
                                                    onChange={this.handleChange}
                                                    validations={[required]}
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Button type="submit" className="btn btn-primary btn-block">Register</Button>
                                                </div>
                                            </div>
                                        </div><hr/>
                                    </Form>
                                </div>
                                
                                {/* Image Register */}
                                <div className="col-md-5">
                                    <img src={require('../../../../library/image/regis_write.jpg')} className="img-fluid" style={{width: '100%', height: '430px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register