import { Row, Col, Button, Layout } from 'antd';
import React from 'react';
import { Link, Route , Switch} from 'react-router-dom';
const style = { background: '#0092ff', padding: '8px 0', color: "white"};
class AdminDashboard extends React.Component {

render()
{
    return(
    <>
    <Row justify="space-around"  gutter={10} > 
       <Col span={12}>
       <Link to="/users" > <div style={style} align="center"> Edit Users </div> </Link>
        </Col>
    </Row>
    <br></br>
    <Row justify="space-around"  gutter={10}>
    <Col span={12}>
       <Link to="/restaurants" > <div style={style} align="center" > Edit Restaurants </div> </Link>
        </Col>
    </Row>
    </>
    )
}

}
export default AdminDashboard