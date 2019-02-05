import React from 'react'
import HeaderDashboard from './templates/HeaderDashboard'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CreatePost from './dashboard/post/Create'

class Dashboard extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            users: [],
            redirect: false
        }
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

    componentDidMount(){
        document.title = "MyWriting - Dashboard"

        axios.get('http://localhost:3000/dashboard?token='+sessionStorage.getItem('myToken'))
        .then(res => {
            // jika user belum login, maka tidak bisa akses halaman dashboard
            // atau akan diredirect ke halaman login
            if(res.data.loggedin === false){
                this.setRedirect()
            }

            this.setState({users: res.data.user})
        })
    }

    // fungsi ini dipakai untuk mengambil data user yang sedang login
    // dan data-datanya akan di tampilkan pada component HeaderDashboard
    getDataHeaderDashboard(){
        return this.state.users.map((obj, i) => {
            return <HeaderDashboard obj={obj} key={i}/>
        })
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                {this.getDataHeaderDashboard()}
                <CreatePost/>
            </div>
        )
    }
}

export default Dashboard