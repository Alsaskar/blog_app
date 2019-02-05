import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Root from './components/Root'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './components/Dashboard'
import ListPost from './components/dashboard/post/List'

ReactDOM.render(<Router>
                <div>
                    <Route exact path='/' component={Root}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/list-post' component={ListPost}/>
                </div>
            </Router>, document.getElementById('root'))