import React from "react";
import * as API from '../../../Helpers/APIRequest';
import qs from 'qs'
import {
    BrowserRouter as Router,
    withRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import EditUserForm from './EditUserForm'


class EditUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            id: "",
            username: "",
            surname: "",
            telephone: "",
            bankAccount: ""

        }
    }
    getRestaurant() {

            API.RequestAPI(API.get_request, 'Users/' + this.props.match.params.id)
              .then(
                response => {
                    console.log(response)
             this.setState({name:response.name, password:response.password, id:response.id, username:response.username, 
                surname: response.surname, telephone:response.telephone, bankAccount:response.bankAccount
            })
               }
              )
             .catch(err => { console.log(err) });
    }

    conditionalRender() {
        if (this.state.name == "")
            return (<div> {this.state.bankAccount} </div>)
        return (<EditUserForm 
            name={this.state.name} password={this.state.password} username={this.state.username} surname={this.state.surname} 
            id={this.state.id} telephone={this.state.telephone} bankAccount={this.state.bankAccount}
            ></EditUserForm>)
    }

    componentDidMount() {
        this.getRestaurant()
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        return (
            <div> {this.conditionalRender()}</div>);
    }
}
export default withRouter (EditUser)