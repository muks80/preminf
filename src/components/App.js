import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleAuthContextProvider from '../apis/googleAuthContext';

import fixturesData from '../apis/fixturesData';
import Navbar from './routes/navbar';
import Fixtures from './fixturesResults/fixtures';
import LiveScores from './liveScores/liveScores';
import News from './news/news';
import NewsArticle from './news/newsArticle';
import LeagueTable from './leagueTable/leagueTable';

const App = () => {
    const [round, setRound] = useState('');
    const [fixtures, setFixtures] = useState([]);
    const prevRound = useRef(round);

    useEffect(() => {
        const fetchFixtures = () => {
            fixturesData.get(`fixtures/league/3456/Regular_Season_-_${round}`).then((res) => {
                setFixtures(res.data.api.fixtures);
                }).catch(function (error) {
                console.log(error);
            })
        }

        if (round !== prevRound.current) {
                fetchFixtures();
            } else {
            fixturesData.get('fixtures/rounds/3456/current').then((res) => {
                let currentRound = res.data.api.fixtures[0].slice(-2);
                if (currentRound[0] === '_') {
                    currentRound = currentRound[1];
                }
                setRound(currentRound);
                prevRound.current = currentRound;
                }).catch(function (error) {
                    console.log(error);
                }).then(() => {
                    fetchFixtures();
                })
        }

    },[round])

    const updateRound = (round) => {
        setRound(round);
    }

    return(
        <Router>
            <Navbar/>
            <Switch>
                  <Route exact path="/"><LiveScores/></Route>
                  <Route exact path="/fixtures"><Fixtures round={round} fixtures={fixtures} updateRound={updateRound}/></Route>
                  <Route exact path="/news"><News/></Route>
                  <Route exact path="/news/:id">
                      <GoogleAuthContextProvider>
                        <NewsArticle/>
                      </GoogleAuthContextProvider>
                  </Route>
                  <Route exact path="/leaguetable"><LeagueTable/></Route>
            </Switch>
        </Router>
    )  
}
 
export default App;