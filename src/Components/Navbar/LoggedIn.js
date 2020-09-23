
import React, { Fragment }  from 'react';
import Media from 'react-media';
import { Link, Route , Switch} from 'react-router-dom';
import LoginPage from '../Auth/Login'
import Empty from '../Empty'
import {  Row, Menu, Button, Col, Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import cookie from 'react-cookies'
import  { Redirect, withRouter } from 'react-router-dom'
import * as API from '../../Helpers/APIRequest';



class LoggedIn extends React.Component {
    constructor() {
        super();
         this.menu = (
        <Menu onClick={this.onClick}>
           <Menu.ItemGroup key="g1" title={cookie.load('username',  { path: '/' })}></Menu.ItemGroup>
            
          {this.conditionalRender()}
           <Menu.Item key="2">
           <Link to='/editProfile' >    Edit Profile
            
           </Link>
                                    
            </Menu.Item>
          <Menu.Item key="3" danger>Logout</Menu.Item>
        </Menu>
      );





         }


      getProfile() {
        
          API.RequestAPI(API.get_request, 'Users/MyProfile')
              .then(
                  response => {

                    }
                      )
              .catch(err => { console.log(err) });
      }





    conditionalRender()
    {
      if(  cookie.load('role', { path: '/' }) == 'admin')
      {
        return( <Menu.Item key="1">
        <Link to='/admin' > Admin Menu </Link>
          </Menu.Item>)
      }
    }

    onClick = ({ key }) => {
       switch (key){
       case 1:
       break;
       case 2:
       break;
       case '3':
       this.logOut();
       break;
    }

    }

    logOut()
    {
    cookie.remove('auth', { path: '/' })
    cookie.remove('role',  { path: '/' })
    cookie.remove('username', { path: '/' })
    var handleToUpdate = this.props.handler;
    handleToUpdate()
    this.props.history.push('/')
    }

    render(){
        return(
            <Row gutter={8} justify="end">
            <Col span={4}></Col>
            <Col>
           
            <Dropdown overlay={this.menu} onClick={e => e.preventDefault()}>
            <Avatar shape="square"  style={{background: "white", color:"black"}} size={36} icon={<UserOutlined />} >
            </Avatar>
            </Dropdown>
     
             </Col>
        </Row>
        )
    }
}




export default withRouter(LoggedIn)