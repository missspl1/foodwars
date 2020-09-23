import React, { Fragment } from 'react';
import Media from 'react-media';
import { Link, Route, Switch } from 'react-router-dom';
import Empty from '../Empty'
import LoggedIn from '../Navbar/LoggedIn'
import LoggedOut from '../Navbar/LoggedOut'
import cookie from 'react-cookies'
import { Row, Col, Typography, Layout } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const style = { background: '#0092ff', padding: '4px 0' };

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.auth()
        }
    }

    auth() {
        return cookie.load('auth')
    }

    handler() {
        // this.props.auth =this.auth()
        this.setState({ auth: this.auth() });
        var handleToUpdate = this.props.handler;
        handleToUpdate()
    }

    refreshAuth() {
        this.setState({ auth: this.auth() });
    }

    componentWillReceiveProps(props) {

        this.refreshAuth()
    }



    render() {



        return (

            <div>
                        <Media queries={{ small: { maxWidth: 768 } }}>
                        {matches =>
                            matches.small ? (
                                <div>
                                 
                              <Row justify="space-around" style={style} align='middle'  >
                                <Col>  
                                <Link to='/' style={{ color: 'white' }}>
                                 <b>FoodWar </b>  <TrophyOutlined color='YELLOW'/>
                                    </Link>
                                    </Col>
    
                             
                                  {this.state.auth != null ?
                                        <LoggedIn handler={this.handler.bind(this)}> </LoggedIn>
                                        :
                                        <LoggedOut handler={this.handler.bind(this)}> </LoggedOut>}
                                </Row>
                                </div>
                            ) : (
                              <div>
                           
                              <Row justify="space-around" style={style} align='middle'  >
                    
                                <Col >
                                    <Link to='/' style={{ color: 'white' }}>
                                       <b>FoodWar</b> <TrophyOutlined color='YELLOW'/>
                                    </Link>
                                </Col>
                                <Col  span={10}>
                                </Col>
                                <Col >
  
                                    {this.state.auth != null ?
                                        <LoggedIn handler={this.handler.bind(this)}> </LoggedIn>
                                        :
                                        <LoggedOut handler={this.handler.bind(this)}> </LoggedOut>}
                         
                                </Col>
                            </Row>
                    
                            </div>
                                )}
                        </Media>


                            
</div>












        )
    }
}

export default Navbar