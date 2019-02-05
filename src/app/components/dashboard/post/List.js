import React from 'react'
import HeaderDashboard from '../../templates/HeaderDashboard'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import TblListPost from './TblListPost'

class ListPost extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            users: [],
            redirect: false,
            listPost: []
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

        // mengambil data post berdasarkan siapa yang buat
        axios.get('http://localhost:3000/dashboard/lisPost?token='+sessionStorage.getItem('myToken'))
        .then(res => {
            this.setState({listPost: res.data.posts})
        })
    }

    // fungsi ini dipakai untuk mengambil data user yang sedang login
    // dan data-datanya akan di tampilkan pada component HeaderDashboard
    getDataHeaderDashboard(){
        return this.state.users.map((obj, i) => {
            return <HeaderDashboard obj={obj} key={i}/>
        })
    }

    TblListPost(){
        return this.state.listPost.map((obj, i) => {
            return <TblListPost post={obj} key={i}/>
        })
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                {this.getDataHeaderDashboard()}
                
                <div className="card" style={{marginTop: '2%'}}>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Subject</th>
                                <th scope="col">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.TblListPost()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListPost