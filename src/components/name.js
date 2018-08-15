import React, {Component} from 'react';


import {Grid,Row, Col} from 'react-bootstrap';


const containerStyle = {
    height: '300px',
    width: 'auto',
    backgroundColor: ''
}
const titleStyle ={
fontSize: '24px',
margin: '1rem'
}

class Name extends Component {
    render(){

        return (
            <div style = {containerStyle}> 
                  <span style={titleStyle}> DERRICK CRABTREE </span>
                  <div>
                      14 Tottenham Court Road, London, England W1T 1JY |
                      C: 07956 654 32 | example-email@example.com
                  </div>
            </div>

        );


    }
}

export default Name;

