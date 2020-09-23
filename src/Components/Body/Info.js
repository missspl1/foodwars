import React from 'react'
import {Row, Col, Typography} from 'antd'
import Countdown, {zeroPad} from 'react-countdown';
const { Title } = Typography;
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (<Title level={2} style={{color:'#b8b8b8'}}>Vote started</Title>);
    } else {
      return <Title level={2} style={{color:'#b8b8b8'}}>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</Title>;
    }
  };
class Info extends React.Component {
    date(){
      var today = new Date();
      let time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' 9:55';
      return time
    }
    render(){
        return(
       <>     <Row justify="center">  <Countdown
       date={  this.date()}
       intervalDelay={0}
       renderer={renderer}
     /></Row>
     <br></br>
     <br></br>
     <br></br>
            <Row justify="center"> <Title level={2}>Regulamin</Title></Row>
            <Row justify="center"><Col span={7}></Col> <Col span={10}>
            <Title level={5}>   1. Głosowanie rozpoczyna się każdego dnia o godzinie 9:30 i kończy o 10:30. </Title>
                </Col><Col span={7}></Col></Row>
            <Row justify="center"><Col span={7}></Col> <Col span={10}>
            <Title level={5}>    2. Aby uczestniczyć w głosowaniu należy zalogować się uprzednio otrzymanym hasłem. </Title>
                </Col> <Col span={7}></Col></Row>
                
                <Row justify="center"><Col span={7}></Col> <Col span={10}>
            <Title level={5}>   3. Aby oddać głos należy zaznaczyć wybraną restauracje z listy.</Title> 
                </Col> <Col span={7}></Col></Row>
            <Row justify="center"><Col span={7}></Col> <Col span={10}>
            <Title level={5}>   4. Osoba, która oddała/zmieniła głos jako ostatnia jest zobowiązana zamawiać jedzenie.</Title> 
                </Col> <Col span={7}></Col></Row>
                <Row justify="center"><Col span={7}></Col> <Col span={10}>
            <Title level={5}>   5. W przypadku remisu, restauracja jest wybierana losowo z restauracji o największej liczbie głosów.</Title> 
                </Col> <Col span={7}></Col></Row>
                <Row justify="center"><Col span={7}></Col> <Col span={10}>
            <Title level={5}>   6. Aby ułatwić zwrot pieniędzy, można dodać w profilu numer konta bankowego/ numer telefonu na który pieniądze mają być zwrócone.</Title> 
                </Col> <Col span={7}></Col></Row>
                <Row justify="center"><Col span={7}></Col> <Col span={10}>
            <Title level={5}>   7. Po głosowaniu wyświetla się informacja o wybranej restauracji wraz z danymi osoby zamawiającej.</Title> 
                </Col> <Col span={7}></Col></Row>
                <Row justify="center"><Col span={7}></Col> <Col span={10}>
            <Title level={5}>   8. Wszystkie pytania kierować do Piotra Radlaka.</Title> 
                </Col> <Col span={7}></Col></Row>
        </>
        )
    }
}
export default Info