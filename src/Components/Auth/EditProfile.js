import React from 'react';
import {   Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch} from 'antd';
import Media from 'react-media'
import * as API from '../../Helpers/APIRequest';
import cookie from 'react-cookies'
import  { Redirect, withRouter } from 'react-router-dom'
import EditProfileForm from './EditProfileForm'

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            telephone: "",
            bankAccount: "",
            username: "",
        }
    }


    
    getProfile() {
        
        API.RequestAPI(API.get_request, 'Users/MyProfile')
            .then(
                response => {
                  this.setState({username:response.username, bankAccount:response.bankAccount, telephone:response.telephone})
                }
            )
            .catch(err => { console.log(err) });
    }
    
    conditionalRender()
    {
    if(this.state.username == "")
    return (<div></div>)
    return ( <EditProfileForm username={this.state.username} telephone={this.state.telephone} bankAccount={this.state.bankAccount}></EditProfileForm>)
    }

    componentDidMount(){
      this.getProfile()
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
        <div> {this.conditionalRender()}
        {console.log(this.state.username)}
        </div>
          
            );
    }
}
export default withRouter(EditProfile)