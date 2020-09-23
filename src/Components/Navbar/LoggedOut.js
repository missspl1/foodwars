import React, { Fragment } from 'react';
import Media from 'react-media';
import { Link, Route, Switch } from 'react-router-dom';
import LoginPage from '../Auth/Login'
import Empty from '../Empty'
import { Row, Menu, Button, Col } from 'antd';


class LoggedIn extends React.Component {



    render() {
        return (
                        <div>
                           <Link to='/login' style={{ textDecoration: 'none' }}> <Button type="primary">Login</Button> </Link>
                        </div>
        )
    }
}
export default LoggedIn