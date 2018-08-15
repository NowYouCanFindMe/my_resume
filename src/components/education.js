import React, {Component} from 'react';


import {Grid,Row, Col} from 'react-bootstrap';


const containerStyle = {
    minHeight: '250px',
    width: 'auto',
    padding: '1rem',
    backgroundColor: '#ecf0f1'
}
const titleStyle ={
fontSize: '24px',
margin: '1rem'
}

class Education extends Component {
    render(){

        return (
            <div style = {containerStyle}> 
                  <span className="hvr-float-shadow" style={titleStyle}> Education </span>
                  <div>
                      <Row>
                            <Col xm={12} md={6} lg={6} >
                                <b> Bachelor of Science: Business Management</b> <br />
                                University of London<br />
                                Emphasis in Business Analytics<br />
                                Top 5% of class
                            </Col>

                             <Col xm={12} md={6}  lg={6}>
                                <b> 2004</b> <br />
                                London England<br />
                            </Col>
                      </Row>
                  </div>
            </div>

        );


    }
}

export default Education;

