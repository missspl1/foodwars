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
import RestaurantTagsForm from './RestaurantTagsForm'


class EditRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fin : false,
            restaurantTags: '',
            tags: []
        }
        this.getAllTags = this.getAllTags.bind(this);
    }

    getRestaurantTags() {

            API.RequestAPI(API.get_request, 'Restaurants/' + this.props.match.params.id)
              .then(
                response => {
            
             this.setState({restaurantTags : response, fin: true})
            
               }
              )
             .catch(err => { console.log(err) });
    }

    getAllTags()
    {
        this.setState({fin : false})
        API.RequestAPI(API.get_request, 'Tags/')
        .then(
          response => {
       this.state.fin ++
       this.setState({tags : response})
     
       this.getRestaurantTags()
         }
        )
       .catch(err => { console.log(err) });
    }

    conditionalRender() {
        if (!this.state.fin)
            return (<div> </div>)
        return (
            <RestaurantTagsForm tags={this.state.tags} callback = {this.getAllTags} restaurant={this.state.restaurantTags}></RestaurantTagsForm>
        )
    }

    componentDidMount() {
        this.getAllTags()
      
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