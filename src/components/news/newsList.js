import React from 'react';
import { Item, Segment } from 'semantic-ui-react';

import NewsItem from './newsItem';

const NewsList = ({ news, signedIn, user }) => {

    return(
        <Segment style={{margin: '15px'}}>
            <Item.Group divided>
                {news.map(article => {
                    return <NewsItem 
                                title={article.title} 
                                image={article.image} 
                                header={article.header} 
                                id={article.id} 
                                date={article.date} 
                                key={article.id} 
                                signedIn={signedIn} 
                                user={user} 
                            />    
                })}
            </Item.Group>
        </Segment>
    )
}

export default NewsList;


                    