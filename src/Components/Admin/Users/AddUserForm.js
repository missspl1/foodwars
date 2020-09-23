import React from 'react';
import {
    Form,
    Input,
    Button,
    TimePicker
} from 'antd';
import moment from 'moment'
import * as API from '../../../Helpers/APIRequest';
import { Redirect, withRouter } from 'react-router-dom'

class EditUserForm extends React.Component {
    addUser(name, surname, bankAccount, telephone, username, password) {

        API.RequestAPI(API.post_request, 'Users',
            {  Name: name, BankAccount: bankAccount, Surname: surname, Telephone: telephone, Username: username, Password: password, RoleID: 2})
            .then(
                response => {
                    this.props.history.push('/users')
                }
            )
            .catch(err => { console.log(err) });
    }


    render() {
        const onFinish = values => {
            this.addUser(values.Name, values.Surname, values.BankAccount, values.Telephone, values.Username, values.Password
                
                )
        };

        return (
            <>
                <Form
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

                    <Form.Item ><Button type="primary" htmlType="submit">
                        Submit
                     </Button>
                    </Form.Item>


                </Form>

            </>
        );

    }

}
export default withRouter(EditUserForm)