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

class AddRestaurant extends React.Component {
    AddRestaurant(name, phoneNumber, description, website, openingTime) {

        console.log(openingTime)
        API.RequestAPI(API.post_request, 'Restaurants/', 
       {  Name: name, PhoneNumber: phoneNumber, Description: description, Website: website, OpenningTime: openingTime})
        .then(
            response=>{
            this.props.history.push('/restaurants')}
        )
        .catch(err => { console.log(err) });
    }


    render() {
        const onFinish = values => {
            this.AddRestaurant(values.Name, values.PhoneNumber, values.Description, values.Website, moment(values.OpeningTime).format("YYYY-MM-DD HH:mm"))
        };

        return (
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                size="small"
                onFinish={onFinish}
            >
                <Form.Item label="Name" name="Name">
                    <Input />
                </Form.Item>

                <Form.Item label="Phone Number" name="PhoneNumber">
                    <Input />
                    
                </Form.Item>
                <Form.Item label="Website" name="Website">
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="Description">
                    <Input />
                </Form.Item>
                <Form.Item label="Opening Time" name="OpeningTime">
                    <TimePicker />
                </Form.Item>
                <Form.Item ><Button type="primary" htmlType="submit">
                    Submit
                     </Button>
                </Form.Item>


            </Form>
        );

    }

}
export default withRouter(AddRestaurant)