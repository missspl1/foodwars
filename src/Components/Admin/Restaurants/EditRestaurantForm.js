import React from 'react';
import {
    Form,
    Input,
    Button,
    TimePicker,
    Row,
} from 'antd';
import moment from 'moment'
import * as API from '../../../Helpers/APIRequest';
import { Redirect, withRouter, Link } from 'react-router-dom'

class EditRestaurantForm extends React.Component {
    editRestaurant(name, phoneNumber, description, website, openingTime) {

      
        API.RequestAPI(API.put_request, 'Restaurants/edit', 
       { ID: this.props.id, Name: name, PhoneNumber: phoneNumber, Description: description, Website: website, OpenningTime: openingTime})
        .then(
            response=>{
           
            this.props.history.push('/restaurants')
            }
        )
        .catch(err => { console.log(err) });
    }

    render() {
        const onFinish = values => {
            this.editRestaurant(values.Name, values.PhoneNumber, values.Description, values.Website, moment(values.OpeningTime).format("YYYY-MM-DD HH:mm"))
        };

        return (
            <>
            <Form
                initialValues={{
                    Name: this.props.name,
                    PhoneNumber: this.props.phoneNumber,
                    Description: this.props.description,
                    Website: this.props.website,
                    OpeningTime: moment(this.props.openningTime)
                }}
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
                <Form.Item ><Button type="primary" size="middle" htmlType="submit">
                    Submit
                     </Button>
                </Form.Item>


            </Form>
            <Row justify="center">
            <Link to={"/tags/"+this.props.id}><Button size="large" type="link">Edit Tags</Button></Link>
            </Row>
            <Row justify="center">
               <Link to={"/restaurants/"}><Button size="large" type="link">Back</Button></Link>
              </Row>
            </>
        );

    }

}
export default withRouter(EditRestaurantForm)