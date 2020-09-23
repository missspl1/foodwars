import React from 'react';
import {
    Form,
    Input,
    Button,
    TimePicker,
    Table,
    Select,
    Row
} from 'antd';

import moment from 'moment'
import * as API from '../../../Helpers/APIRequest';
import { Redirect, withRouter, Link } from 'react-router-dom'

const { Option } = Select
class RestaurantTagForm extends React.Component {
  
    columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
          {
            title: '',
            key: 'id',
            render: (text, record) => (
               <Button type= 'danger' onClick={() => this.deleteTag(record.key)}>Delete</Button>
            ),
          },
        ]

    getRestaurantTags() {

        API.RequestAPI(API.get_request, 'Restaurants/' + this.props.match.params.id)
          .then(
         response => {
          let res = response.restaurantTags.map(row => ({
            key: row.id.toString(),
            name: row.tag.name,
          }))

          
          this.setState({ dataSource: res })
           }
          )
         .catch(err => { console.log(err) });
        }
  
  
    addTag(tagID) 
    {
        API.RequestAPI(API.post_request, 'Tags', 
        { RestaurantID:this.props.match.params.id, TagID: tagID})
         .then(
             response=>{
             
                this.props.callback()
             
            }
         )
         .catch(err => { console.log(err) });
    }


    deleteTag(id)
    {
        API.RequestAPI(API.delete_request, 'Tags/'+id, 
        {})
         .then(
             response=>{
             
                this.props.callback()
             
            }
         )
         .catch(err => { console.log(err) });
    }
    constructor(props) {
        super(props);
        this.state = {
          dataSource: [],
        }
      }

    componentDidMount() {
        this.getRestaurantTags()
      
    }
  
    render() {
        const onFinish = values => {
            this.addTag(values.Tag)
        };

       
        return (
            <>
            <Table dataSource={this.state.dataSource} columns={this.columns} pagination={ false} />
             
             <br></br>
             
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    size="small"
                    onFinish={onFinish}
                >

                    <Form.Item label="" name="Tag">
                    <Select placeholder="Tags">
                    {this.props.tags.map(group => <Option key={group.id} value={group.id}>{`${group.name}`}</Option>)}
                    </Select>
                    </Form.Item>
                    <Form.Item ><Button type="primary" size="middle" htmlType="submit">
                        Add
                     </Button>
                    </Form.Item>
                </Form>
                <Row justify="center">
               <Link to={"/restaurants/"+this.props.match.params.id}><Button size="large" type="link">Back</Button></Link>
              </Row>

            </>
        );
    }

}
export default withRouter(RestaurantTagForm)