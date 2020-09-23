import React from "react";
import { Table,Row, Button } from 'antd'
import * as API from '../../../Helpers/APIRequest';
import {
    Link,
  BrowserRouter as Router,
  useParams,
  withRouter
} from "react-router-dom";



class AllUsers extends React.Component 
{

   columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
        title: 'Surname',
        dataIndex: 'surname',
      },
    {
        title: '',
        key: 'id',
        render: (text, record) => (
            <Link to={'/users/'+ record.key}> <Button type='primary'>Edit</Button></Link>
        ),
      },
      {
        title: '',
        key: 'id',
        render: (text, record) => (
           <Button type= 'danger' onClick={() => this.deleteUser(record.key)}>Delete</Button>
        ),
      },
    ]
    constructor(props) {
        super(props);
        this.state = {
          restaurants: [],
        }
      }
      deleteUser(id)
      {
        API.RequestAPI(API.delete_request, 'Users/'+ id, {})
        .then(
          response => {
          this.getUsers()}
        )
        .catch(err => { console.log(err) });
      }

      getUsers()
      {
        
        API.RequestAPI(API.get_request, 'Users', {})
        .then(
          response => {
            console.log(response)
            let res = response.map(row => ({
              key: row.id.toString(),
              name: row.name,
              surname : row.surname
            }))
            this.setState({ users: res })
          }
        )
        .catch(err => { console.log(err) });
      }

      componentDidMount() {
        this.getUsers()
      }
      
       render(){ return (  <div>
          <Table
              dataSource={this.state.users} columns={this.columns} pagination={{ pageSize: 6}} />
          <br></br>
              <Link to='/user/add'><Button size='large'>Add</Button></Link>
              </div>

              )}  
}
export default withRouter(AllUsers)