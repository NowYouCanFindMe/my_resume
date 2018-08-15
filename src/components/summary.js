import React, {Component} from 'react';


import {Grid, Col} from 'react-bootstrap';

const titleStyle ={
    fontSize: '24px',
    margin:'1rem'
}

const containerStyle ={
    background: '#ecf0f1',
    minHeight: '300px',
    padding: '1rem'
}
class Summary extends Component {
    render(){

        return (
            <div  style={containerStyle}> 
            <span className="hvr-float-shadow" style={titleStyle}> Summary </span>
            <div> 
                   Accomplished Business Analyst skilled in achieving operational efficiency 
                   and increasing revenue in the health care industry. Business process improvement, 
                   <b className ="hvr-buzz"> data analysis </b>, and asset management expert. Employs root cause analysis
                   to identofy issues and develop process improvements that lead to cost savings.
                   Exceptional planning and implementation capabilities.
            </div>
            </div>

        );


    }
}

export default Summary;

