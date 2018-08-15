import React, {Component} from 'react';


import {Grid, Col, Row} from 'react-bootstrap';

const containerStyle = { 
    background: '#eeeeee',
    padding: '1rem',
    
}

const titleStyle ={
    fontSize: '24px',
    margin: '1rem'
}

function TypeOfExperience(props) {  
    const todoItems = props.whatIDid.map(item => {
      return <li>{item}  </li>
    })
    return (
            <div >
                    <Row>
                        <div style ={{textAlign: 'left', padding: '1rem', margin: '2ren'}}>
                            <Col xm={12} md={6} lg={6} >
                                <b> {props.title}</b> <br />
                                {props.employer}<br />
                                
                            </Col>
                        </div>
                            
                        <div style={{textAlign: 'right'}}>
                             <Col xm={12} md={6}  lg={6}>
                                <b> {props.duration}</b> <br />
                                {props.location}<br />
                            </Col>
                        </div>
                      </Row>
                    <Row>
                            <div style={{ textAlign: 'left', marginLeft: '2rem'}}>
                                <ul > {todoItems} </ul>
                            </div>
                     
                        
                    </Row>
            </div>
    )       
            
 

            }



class Experience extends Component {
    
    render(){
       
        return (
             <div  style={containerStyle}>
                <span className="hvr-float-shadow" style={titleStyle}> Experience </span>
                <TypeOfExperience 
                    title = 'Lead Business Analyst'
                    employer = 'Heritage Hospital'
                    location = 'Bradford, West Yorkshire'
                    duration =  '08/2011 to Current'
                    whatIDid = {['Spearhead supply chain process improvement and systems implementation projects',
                                'Develop metrics used to determine inefficiencies and areas for improvement across the hospital',
                                'Identify process bottlenecks and implemented new and improved processes and policies.',
                                'Lead cross-functonal teams to analyse and understand the operational impacts and opportunities for technology',
                                'Promoted to Lead Analyst after just 11 months of employment']}
                     />
                <TypeOfExperience 
                    title = 'Business Analyst'
                    employer = 'Heritage Hospital'
                    location = 'Bradford, West Yorkshire'
                    duration =  '08/2010 to 07/2011'
                    whatIDid = {['Analysed department technology usage and determined the best course for future purchases',
                    'Conducted activity-based analysis of hospital processes and made recommendations based on the findings',
                    'Identified process boundaries and developed opportunities to automate processes and functions.',
                    'Gathered technical requirements and particitpated in design sessions',
                    'Ensured compliance with established internal control procedures by examining records, reports, operating practicies, and documentation']}
                    />
                <TypeOfExperience 
                    title = 'Business Analyst'
                    employer = 'Mercy Hospital'
                    location = 'Salt Lake City, Texas'
                    duration =  '02/2005 to 08/2010'
                    whatIDid = {['Performed research to assist in development of project scope, define requirements, and propose changes.',
                    'Drafted monthly financial reconciliations and forecasts.',
                    'Assksted senior staff with development of effective presentations.',
                    'Collected, data analysed trends and created reports as requested.']}
                    />
            </div>

        );


    }
}

export default Experience;

