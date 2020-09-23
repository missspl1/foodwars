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
import EditRestauranForm from './EditRestaurantForm'


class EditRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            id: "",
            openningTime: "",
            phoneNumber: "",
            website: ""
        }
    }
    getRestaurant() {

            API.RequestAPI(API.get_request, 'Restaurants/' + this.props.match.params.id)
              .then(
                response => {
                    console.log(response)
             this.setState({name:response.name, description:response.description, id:response.id, openningTime:response.openningTime, 
                website: response.website, phoneNumber:response.phoneNumber
            })
               }
              )
             .catch(err => { console.log(err) });
    }

    conditionalRender() {
        if (this.state.name == "")
            return (<div> {this.state.bankAccount} </div>)
        return (<EditRestauranForm 
            name={this.state.name} phoneNumber={this.state.phoneNumber} website={this.state.website} openningTime={this.state.openningTime} 
            id={this.state.id} description={this.state.description}
            ></EditRestauranForm>)
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
export default withRouter (EditRestaurant)