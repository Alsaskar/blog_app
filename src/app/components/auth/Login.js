import React from 'react'
import HeaderRoot from '../templates/HeaderRoot'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import { required, email } from '../../lib/validations'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
require('../../../../style/auth.css')
import Spinner from 'react-spinner-material'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
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
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3000/user/login', user)
        .then(res => {
            if(res.data.message === true){ // jika login berhasil
                setTimeout(() => {
                    this.setRedirect() // redirect ke halaman login
                    sessionStorage.setItem('myToken', res.data.token) // menyimpan token pada local storage
                }, 2000)
            }else{
                // feedback ke client
                setTimeout(() => {
                    this.setState({message: res.data.message, spinner: false})
                }, 2000)
            }
        })

        this.setState({spinner: true})
    }

    componentDidMount(){
        document.title = "MyWriting - Login"

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
                    <h2>Login</h2><hr/>
                    <div className="card">
                        <div className="card-body">
                        {this.state.message === '' ? '' : <div className="alert alert-danger">{this.state.message}</div>}
                        <center><Spinner size={50} spinnerColor={"#333"} spinnerWidth={3} visible={this.state.spinner}/></center>
                            <Form method="post" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input type="text"
                                        name="email" 
                                        id="email" 
                                        className="input" 
                                        placeholder="Email"
                                        onChange={this.handleChange}
                                        validations={[required]}
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
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Button type="submit" className="btn btn-primary btn-block">Login</Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login