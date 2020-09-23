import React from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';
import * as API from '../../Helpers/APIRequest';
import { Redirect, withRouter } from 'react-router-dom'

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    editProfile(telephone, bankAccount) {

        API.RequestAPI(API.put_request, 'Users/Edit', { Telephone: telephone, BankAccount: bankAccount})
            .then(
                this.props.history.push('/editProfile')
            )
            .catch(err => { console.log(err) });
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    
    render() {

        const onFinish = values => {
            this.editProfile(values.Telephone, values.BankAccount)
        };
        return (



            <Form
                initialValues={{
                    Username: this.props.username,
                    Telephone: this.props.telephone,
                    BankAccount: this.props.bankAccount
                }}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                size="small"
                onFinish={onFinish}
            >
                <Form.Item label="Telephone Number" name="Telephone">
                    <Input />
                </Form.Item>

                <Form.Item label="Bank Account" name="BankAccount">
                    <Input />
                </Form.Item>

                <Form.Item ><Button type="primary" size="middle" htmlType="submit">
                    Submit
                 </Button>
                </Form.Item>


            </Form>
        );
    }
}
export default withRouter(EditProfileForm)