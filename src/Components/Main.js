import React from 'react';
import LoginPage from './Auth/Login';
import * as API from '../Helpers/APIRequest';
import cookie from 'react-cookies'
import Navbar from './Navbar/Navbar';
import { Layout} from 'antd';
import Body from './Body/Body'
import EditProfile from './Auth/EditProfile'
import Versus from './Body/VersusAnimation'
import EditRestaurant from './Admin/Restaurants/EditRestaurant'
import AllRestaurant from './Admin/Restaurants/AllRestaurants'
import AddRestaurant from './Admin/Restaurants/AddRestaurantForm';

import EditUser from './Admin/Users/EditUser'
import AllUsers from './Admin/Users/AllUsers';
import AddUserForm from './Admin/Users/AddUserForm'

import RestaurantTags from './Admin/Restaurants/RestaurantTags'
import AdminDashboard from './Admin/AdminDashboard'
import { BrowserRouter as Router, Switch, Route, Link , withRouter} from 'react-router-dom';


const { Header, Content, Footer } = Layout;




class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.auth()
        }
    }

    auth() {
        return cookie.load('auth')
    }

    handler(){
        
        this.setState({auth:this.auth()});
    }
    handleHistory(){
        this.props.history.push('/')
    }




    


    render() {
        return (
                <Router>
                   
                        <Navbar handler = {this.handler.bind(this)}  auth = {this.state.auth} ></Navbar>
                 

                    <Content style={{ padding: '50px 50px', background: 'white' }}>
                        <Switch>
                            <Route exact path="/" component={() => <Body/>}/>
                            <Route exact path="/editProfile" component={() => <EditProfile/>}/>
                         
                            <Route exact path="/restaurants" component={()=><AllRestaurant/>}/>
                            <Route exact path="/restaurants/:id" component={()=><EditRestaurant/>}/>
                            <Route exact path="/restaurant/add" component={()=><AddRestaurant/>}/>

                            <Route exact path="/users" component={()=><AllUsers/>}/>
                            <Route exact path="/users/:id" component={()=><EditUser/>}/>
                            <Route exact path="/user/add" component={()=><AddUserForm/>}/>

                            <Route exact path="/admin" component={()=><AdminDashboard/>}/>
                            <Route exact path="/tags/:id" component={()=><RestaurantTags/>}/>

                            <Route exact path="/login" component={() => <LoginPage handler = {this.handler.bind(this)} handleHistory = {this.handleHistory.bind(this)} />} />
                       
                        </Switch>
                    </Content>
                </Router>
        );
    }
}
export default MainPage
