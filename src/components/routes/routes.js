import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../fixturesResults/home';
import LeagueTable from '../leagueTable/leagueTable';
import LiveScores from '../liveScores/liveScores';
import News from '../news/news';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/livescores" component={LiveScores} />
            <Route exact path="/leaguetable" component={LeagueTable} />
            <Route exact path="/news" component={News} />
        </Switch>
    );
}
 
export default Routes;
