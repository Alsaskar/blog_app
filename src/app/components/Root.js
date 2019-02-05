import React from 'react'
import { Link } from 'react-router-dom'
require('../../../style/root.css')
import HeaderRoot from './templates/HeaderRoot'
import PerCategory from './post/PerCategory'

class Root extends React.Component{

    componentDidMount(){
        document.title = "MyWriting - Writing makes us remember by others"
    }

    render(){
        return (
            <div>
                <HeaderRoot/>
                <div id="home_page">
                    <div className="container">
                        <h1 align="center"><b>MyWriting</b></h1>
                        <h3 align="center">Writing makes us remember by others</h3><br/>
                        <center>
                            <Link className="btn btn-primary btn-writing" to="/register">Let's start writing now</Link>
                        </center>
                    </div>
                </div><br/>

                {/* Article Post */}
                <div id="post_article">
                    <div className="container-fluid">
                        <h2 align="center">Article</h2><hr/>
                        <PerCategory/><hr/>
                    </div>
                </div>

                {/* Tutorial Post */}
                <div id="post_tutorial">
                    <div className="container-fluid">
                        <h2 align="center">Tutorial</h2><hr/>
                        <PerCategory/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Root