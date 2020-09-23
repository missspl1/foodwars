import React from 'react';
import {
    Form,
    Input,
    Button,
    TimePicker,
    Row
} from 'antd';
import moment from 'moment'
import * as API from '../../../Helpers/APIRequest';
import { Redirect, withRouter, Link } from 'react-router-dom'

class EditUserForm extends React.Component {
    editUser(name, surname, bankAccount, telephone, username, password) {

        API.RequestAPI(API.put_request, 'Users/',
            { ID: this.props.id, Name: name, BankAccount: bankAccount, Surname: surname, Telephone: telephone, Username: username, Password: password })
            .then(
                response => {

                    this.props.history.push('/users')
                }
            )
            .catch(err => { console.log(err) });
    }


    render() {
        const onFinish = values => {
            this.editUser(values.Name, values.Surname, values.BankAccount, values.Telephone, values.Username, values.Password
                )
        };


        return (
            <>
                <Form
                    initialValues={{
                        Name: this.props.name,
                        Surname: this.props.surname,
                        Telephone: this.props.telephone,
                        BankAccount: this.props.bankAccount,
                        Password: this.props.password,
                        Username: this.props.username,
                        Tags: []
                    }}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    size="small"
                    onFinish={onFinish}
                >
                    <Form.Item label="Username" name="Username">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Name" name="Name">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Surname" name="Surname">
                        <Input />

                    </Form.Item>
                    <Form.Item label="Password" name="Password">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Bank Account" name="BankAccount">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Telephone" name="Telephone">
                        <Input />
                    </Form.Item>

                    <Form.Item ><Button type="primary" size="middle" htmlType="submit">
                        Submit
                     </Button>
                    </Form.Item>
                </Form>
                <Row justify="center">
               <Link to={"/users/"}><Button size="large" type="link">Back</Button></Link>
              </Row>
            </>
        );
    }
}


export default withRouter(EditUserForm)