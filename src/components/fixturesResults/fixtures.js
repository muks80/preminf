import '../App.css';
import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

import MatchCard from './matchCard';
import PageHeader from '../pageHeader';

const Fixtures = (props) => {
   
    return(
       <Container className="App">
            <Container className='border'>
               <PageHeader title={`Game Week ${props.round}`} updateRound={props.updateRound} round={props.round}/>
               <Container>
                  { !props.fixtures && <Segment style={{margin: '15px'}} textAlign='center'><div>Loading...</div></Segment>}
                  { props.fixtures && props.fixtures.map(fixture => { return <MatchCard fixture={fixture} key={fixture.fixture_id}/> })}
               </Container>
               <PageHeader updateRound={props.updateRound} round={props.round}/>
            </Container>
       </Container>
    );
}
 
export default Fixtures;