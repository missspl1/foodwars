import React from 'react'
import {Row,Col, version} from 'antd'
import pierogi from '../../art/pierogi.png'
import pizza from '../../art/pizza.png'
import vs from '../../art/vs.png'
import whole from '../../art/whole.png'
import posed from 'react-pose';
import Media from 'react-media'
const Box = posed.div({
    hidden: { scale: 0.5 , opacity: 0.2 , transition: { duration: 1500 }},
    visible: { scale: 1, opacity: 1 ,  transition: { duration: 1200 }}
  });




class Versus extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true
        }
    }
    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }
    componentDidMount() {
        this.setState({ isVisible: !this.state.isVisible })
        setInterval(() => {
          this.setState({ isVisible: !this.state.isVisible })
        }, 1500)
      }

    render(){

        const { isVisible } = this.state;
        return(
        <Row justify='center'>
            <Col>
            <Box pose={isVisible ? 'hidden' : 'visible'} >
                                <img src={whole} style={{height: '700px', width: '700px'}} alt="Logo"/>  
             </Box>
            </Col>
        </Row>
        )
    }
}
export default Versus