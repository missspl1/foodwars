import React from 'react'
import * as signalR from '@microsoft/signalr';
import * as API from '../../Helpers/APIRequest';
import Restaurants from './Restaurants'
import Versus from './VersusAnimation'
import { Form, Input, Col, Row, Button } from 'antd';
import Info from './Info'
import PostVote from './PostVote';
class Body extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            vote: 0
        }
        this.connection = null;
      }
    checkCurrentState() 
    {
        API.RequestAPI(API.get_request, 'Vote', {})
        .then(
            response => {
                    this.setState({vote: response.state})
            }
        )
        .catch(err => { console.log(err) });
    }

    componentDidMount () {

        const transport = signalR.HttpTransportType.WebSockets;
        const options = {
          transport
        };
        // create Connection
         this.connection = new signalR.HubConnectionBuilder()
        .withUrl("https://foodwar.azurewebsites.net/votehub", options)
        .withHubProtocol(new signalR.JsonHubProtocol())
        .build();

        this.connection.start().then(() => console.info('SignalR Connected'))
        .catch(err => console.error('SignalR Connection Error: ', err));
        this.checkCurrentState();

        this.connection.on('State', (newState) => {
            this.setState({vote :  newState});
          });
    }

    onClick () {
        console.log('REEEE')
    }
    conditionalRender()
    {
        switch(this.state.vote){ 
            case 0: return( <Info></Info>)
            break;
            case 1: return( <Restaurants></Restaurants>)
            break;
            case 2: return(<PostVote></PostVote>)
            break;
            default: return (<div></div>)
            break;
        }
    }

    render() {
        return (
      
<div>

{this.conditionalRender()}

</div>
        )
    }
}
export default Body