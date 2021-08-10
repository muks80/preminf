import '../App.css';
import React, { useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import PageHeader from '../pageHeader';
import NewsList from './newsList';

const News = () => {
    const [news, setNews] = useState(null);

    useEffect(() => {
        fetch('https://premjson.herokuapp.com/news')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setNews(data);
            });
    }, []);

    return(
       <Container className="App">
           <Container className='border'>
                <PageHeader title={'Latest News'}/>
                { !news && <Segment style={{margin: '15px'}} textAlign='center'><div>Loading...</div></Segment>}
                {news && <NewsList news={news} />}
           </Container>
       </Container>
    );
}
 
export default News;

// 'http://localhost:8000/news'