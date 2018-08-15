import React, {Component} from 'react';


import {Grid, Col, Row} from 'react-bootstrap';
const titleStyle = { 
    fontSize: '24px',
    margin: '1rem'
}

const containerStyle = {
    background: '#eeeeee',
    padding: '1rem'
}
class Highlights extends Component {
    render(){

        return (
            <div style={containerStyle}>
            <div className="hvr-float-shadow" style={titleStyle}> 
                   Highlights
            </div>

            <div style={{padding:'1rem', marginLeft: '3rem'}}> 
                <Row>
                    <div style ={{textAlign: 'left'}}>
                        <Col xm={6} md={6} lg={6}>
                            <li>Business process improvement</li>
                            <li>Forecasting and planning</li>
                            <li>Advanced Excel modelling</li>
                            <li>Cost-benefit analysis</li>
                        </Col>
                    </div>
                    <div style ={{textAlign: 'left'}}>
                        <Col xm={6} md={6} lg={6}>
                            <li>Budgeting</li>
                            <li>Project management</li>
                            <li>Project Life cycle </li>
                            <li>System development life cycle</li>
                            <li>IS change management</li>
                        </Col>
                    </div>
                </Row>
            </div>
            </div>

        );


    }
}

export default Highlights;

