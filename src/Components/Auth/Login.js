import React from 'react';
import { Form, Input, Col, Row, Button } from 'antd';
import Media from 'react-media'
import * as API from '../../Helpers/APIRequest';
import cookie from 'react-cookies'
import  { Redirect, withRouter } from 'react-router-dom'

class LoginPage extends React.Component {

    login( password) {
        
        API.RequestAPI(API.post_request, 'Users/Login', {'Password': password })
            .then(
                response => {
                    if(response.token!=null){
                    cookie.save('auth', "Bearer " + response.token, { path: '/' })
                    cookie.save('role', response.user.role.roleName, { path: '/' })
                    cookie.save('username', response.user.username, { path: '/' })
                    var handleToUpdate = this.props.handler;
                  
                }

                    handleToUpdate()
                    this.props.history.push('/')
                }
            )
            .catch(err => { console.log(err) });


    }
    
    componentWillUnmount() {

        this.setState = (state,callback)=>{
            return;
        };
    }

    render() {



        const onFinish = values => {
            this.login(values.password)
        };

        return (
         
         <div>
                <Row>
                    <Media queries={{ small: { maxWidth: 768 } }}>
                        {matches =>
                            matches.small ? (
                                <div></div>
                            ) : (
                                    <Col span={8}></Col>
                                )}
                    </Media>


                    <Col flex="auto">
                        <Form requiredMark layout="vertical" onFinish={onFinish}>
                            <Form.Item label="Password" required name="password">
                                <Input.Password />
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
                 </Button>
                            </Form.Item>
                        </Form>
                    </Col>


                    <Media queries={{ small: { maxWidth: 768 } }}>
                        {matches =>
                            matches.small ? (
                                <div></div>
                            ) : (
                                    <Col span={8}></Col>
                                )}
                    </Media>
                </Row>
            </div>);
    }
}
export default withRouter(LoginPage)