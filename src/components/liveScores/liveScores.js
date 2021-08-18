import '../App.css';
import { Link } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import MatchCard from '../fixturesResults/matchCard';
import PageHeader from '../pageHeader';
import { useEffect } from 'react';
import useAxios from '../../apis/useAxios';

const LiveScores = () => {
    const { data: todaysGames, isPending: todaysGamesPending, error: todaysGamesError } 
          = useAxios(`fixtures/league/3456/${new Date().toISOString().slice(0,10)}`, (1000 * 60 * 5));

    useEffect(() => {
    }, [todaysGames])

    return(
       <Container className="App">
           <Container className='border'>
                <PageHeader title={"Today's Games"}/>
                <Container>
                    { todaysGamesError && <Segment style={{margin: '15px'}} textAlign='center'><div>{todaysGamesError}</div></Segment> }
                    { todaysGamesPending && <Segment style={{margin: '15px'}} textAlign='center'><div>Loading...</div></Segment> }
                    { (todaysGames && !todaysGames.data.api.fixtures.length) && <Segment style={{margin: '15px'}} textAlign='center'><div>No games today</div><Link to='/'>Fixtures/Results</Link></Segment>}
                    { todaysGames && todaysGames.data.api.fixtures.map(fixture => {return <MatchCard fixture={fixture} key={fixture.fixture_id}/>})}
                </Container>
            </Container>   
       </Container>
    )  
}
 
export default LiveScores;

