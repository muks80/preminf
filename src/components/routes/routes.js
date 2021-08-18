import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Fixtures from '../fixturesResults/fixtures';
import LeagueTable from '../leagueTable/leagueTable';
import LiveScores from '../liveScores/liveScores';
import News from '../news/news';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LiveScores} />
            <Route exact path="/fixtures" component={Fixtures} />
            <Route exact path="/leaguetable" component={LeagueTable} />
            <Route exact path="/news" component={News} />
        </Switch>
    );
}
 
export default Routes;
