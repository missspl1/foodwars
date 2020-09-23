import React from "react";
import { Table,Row, Button } from 'antd'
import * as API from '../../../Helpers/APIRequest';
import {
    Link,
  BrowserRouter as Router,
  useParams,
  withRouter
} from "react-router-dom";



class AllRestaurants extends React.Component 
{

   columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
        title: '',
        key: 'id',
        render: (text, record) => (
            <Link to={'/restaurants/'+ record.key}> <Button type='primary'>Edit</Button></Link>
        ),
      },
      {
        title: '',
        key: 'id',
        render: (text, record) => (
           <Button type= 'danger' onClick={() => this.deleteRestaurant(record.key)}>Delete</Button>
        ),
      },
    ]
    constructor(props) {
        super(props);
        this.state = {
          restaurants: [],
        }
      }
      deleteRestaurant(id)
      {
        API.RequestAPI(API.delete_request, 'Restaurants/'+ id, {})
        .then(
          response => {
          this.getRestaurants()}
        )
        .catch(err => { console.log(err) });
      }

      getRestaurants()
      {
     
        API.RequestAPI(API.get_request, 'Restaurants', {})
        .then(
          response => {
            console.log(response)
            let res = response.map(row => ({
              key: row.id.toString(),
              name: row.name,
            }))
            this.setState({ restaurants: res })
          }
        )
        .catch(err => { console.log(err) });
      }

      componentDidMount() {
        this.getRestaurants()
      }

       render(){ return (  <div>
          <Table
              dataSource={this.state.restaurants} columns={this.columns} pagination={{ pageSize: 6}} />
          <br></br>
              <Link to='/restaurant/add'><Button size='large'>Add</Button></Link>
              </div>

              )}  
}
export default withRouter(AllRestaurants)