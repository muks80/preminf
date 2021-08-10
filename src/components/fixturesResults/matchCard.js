import React from 'react';
import { Grid, Segment, Header, Image, } from 'semantic-ui-react';

const MatchCard = ({ fixture }) => {

    const fixtureDate = () => {
        const date = new Date(fixture.event_date);
        const dateString = date.toLocaleString('en-gb', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        return dateString;
    }

    const referee = () => {
        if (fixture.referee === null) {
            return 'TBC';
        } else {
            return fixture.referee;
        }
    }

    const score = () => {
        const date = new Date(fixture.event_date);
        const time = date.toLocaleTimeString('en-gb', { hour: '2-digit', minute: '2-digit' });

        if (fixture.statusShort === 'FT') {
            return <div style={{backgroundColor: 'rgb(255, 8, 93)', borderRadius: '8px'}}>{fixture.goalsHomeTeam} : {fixture.goalsAwayTeam}</div>;
        } else if (fixture.statusShort === 'NS'){
            return <div>{time}</div>;
        } else if (fixture.statusShort === 'PST') {
            return <div style={{backgroundColor: 'orange', borderRadius: '8px'}}>Postponed</div>;
        } else {
            return <div style={{backgroundColor: 'rgb(0,255,142)', borderRadius: '8px'}}>{fixture.goalsHomeTeam} : {fixture.goalsAwayTeam}</div>;
        }
    }

    return (
    <Segment style={{margin: '15px'}} textAlign='center'>
        <Grid unstackable='true'>
            <Grid.Column width={4}>
                <Image size="tiny" src={fixture.homeTeam.logo} centered style={{paddingTop: '20px'}}></Image>
            </Grid.Column>
            <Grid.Column width={8} textAlign='center'>
                    <Header as="h4" style={{color: '#37003C'}}>{fixtureDate()}</Header>
                    <Header>
                        <Grid style={{color: '#37003C', fontWeight: 'bold'}}>
                            <Grid.Column width={6}>{fixture.homeTeam.team_name}</Grid.Column>
                            <Grid.Column width={4}>{score()}</Grid.Column>
                            <Grid.Column width={6}>{fixture.awayTeam.team_name}</Grid.Column>
                        </Grid>   
                    </Header>
                    <Header as="h4" style={{color: '#37003C'}}>
                        <Grid>
                            <Grid.Column width={7}>Venue: {fixture.venue}</Grid.Column>
                            <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={7}>Referee: {referee()}</Grid.Column>
                        </Grid>
                    </Header>
            </Grid.Column>
            <Grid.Column width={4}>
                <Image size="tiny" src={fixture.awayTeam.logo} centered style={{paddingTop: '20px'}}></Image>
            </Grid.Column>
        </Grid>
    </Segment>
    )
}

export default MatchCard;
