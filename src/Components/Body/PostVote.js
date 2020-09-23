import React from "react";
import * as API from '../../Helpers/APIRequest';
import {Row, Col, Card} from 'antd'
import {
    BrowserRouter as Router,
    withRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


class PostVote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant: "",
            user: "",

        }
    }
    getData() {

            API.RequestAPI(API.get_request, 'Vote/result')
              .then(
                response => {
                    this.setState({restaurant: response.restaurant, user: response.user})
            })
               
              
             .catch(err => { console.log(err) });
    }


    componentDidMount() {
        this.getData()
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    gridStyle = {
        width: '50%',
        textAlign: 'center',
        height: '100%'
      };
    cardStyle = {
        width: '100%'
    }
    render() {
        return (
            <div>

                <Row> 
                <Col span={6}></Col>
                    <Col  span={12}>
                    <Card style={this.cardStyle} title={this.state.restaurant.name}>
                    <Card.Grid style={this.gridStyle}>{this.state.restaurant.website} 	&nbsp;</Card.Grid>
                    <Card.Grid style={this.gridStyle}>
                         {this.state.restaurant.phoneNumber} 	&nbsp;</Card.Grid>
                  
                    </Card>
                    </Col>
                    <Col  span={6}></Col>
                </Row>
                <br></br>
               
                <Row>
                    <Col  span={6}></Col>
                    <Col  span={12}>
                <Card title={this.state.user.name+' '+ this.state.user.surname} style={this.cardStyle}>
                    <Card.Grid style={this.gridStyle}>{this.state.user.bankAccount} 	&nbsp;</Card.Grid>
                    <Card.Grid style={this.gridStyle}>{this.state.user.telephone} 	&nbsp;</Card.Grid>
                    </Card>
                    </Col>
                    <Col  span={6}></Col>
                </Row>
                <br></br>
                <br></br>
                <Row justify="center">
                    Pewnie i tak ja będę musiał zamawiać...
                </Row>
                <Row justify="center">
                    Numer konta: 84 1020 2137 0000 9602 0138 9956  
                </Row>
                <Row justify="center">
                    Numer telefonu: 516 910 148
                </Row>


            </div>);
    }
}
export default withRouter (PostVote)