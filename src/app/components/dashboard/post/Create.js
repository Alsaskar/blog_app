import React from 'react'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import Button from 'react-validation/build/button';
import Textarea from 'react-validation/build/Textarea';
import { required, email } from '../../../lib/validations'
import axios from 'axios'
import Spinner from 'react-spinner-material'
require('../../../../../style/auth.css')

class CreatePost extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            subject: '',
            category: '',
            content: '',
            message: '',
            spinner: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()

        const post = {
            subject: this.state.subject,
            category: this.state.category,
            content: this.state.content
        }

        axios.post('http://localhost:3000/dashboard/create-post?token='+sessionStorage.getItem('myToken'), post)
        .then(res => {
            setTimeout(() => {
                this.setState({message: res.data.message, spinner: false})
            }, 2000)
        })

        this.setState({spinner: true})
    }

    render(){
        return (
            <div className="container" style={{marginTop: '1%', marginBottom: '2%'}}>
            <Form method="post" onSubmit={this.handleSubmit}>
                <h2>Create Post</h2><Button type="submit" className="btn btn-primary">Save Post</Button>
                {this.state.message === '' ? '' : <div className="alert alert-success">{this.state.message}</div>}<hr/>
                <center><Spinner size={50} spinnerColor={"#333"} spinnerWidth={3} visible={this.state.spinner}/></center>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <Input type="text"
                                name="subject"
                                id="subject"
                                className="form-control"
                                placeholder="Subject"
                                onChange={this.handleChange}
                                validations={[required]}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="category">Category</label>
                        <Select 
                            name='category' 
                            id="category" 
                            className="form-control" 
                            validations={[required]}
                            onChange={this.handleChange}
                        >
                            <option value=''>Choose your category</option>
                            <option value='article'>Article</option>
                            <option value='tutorial'>Tutorial</option>
                            <option value='inspiration'>Inspiration</option>
                            <option value='story'>Story</option>
                        </Select>
                    </div>
                </div>
                <div className="card" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                    <Textarea
                        id="content"
                        name="content"
                        className="input"
                        style={{height: '400px'}}
                        validations={[required]}
                        onChange={this.handleChange}
                    />
                </div>
            </Form>
            </div>
        )
    }
}

export default CreatePost