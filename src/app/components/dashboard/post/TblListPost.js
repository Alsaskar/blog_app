import React from 'react'
import axios from 'axios'

class TblListPost extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id_post: ''
        }

        this.deletePost = this.deletePost.bind(this)
    }

    deletePost(){
        axios.delete('http://localhost:3000/dashboard/deletePost/'+this.props.post.id)
    }

    render(){
        return(
            <tr>
                <td>{this.props.post.subject}</td>
                <td>{this.props.post.category}</td>
                <td>
                    <a onClick={() => this.deletePost()} href="#">Delete</a>
                </td>
            </tr>
        )
    }
}

module.exports = TblListPost