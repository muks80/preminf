import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';

const NewsItem = (props) => {

    return(
        <Item as={Link} to={`/news/${props.id}`}>
            <Item.Image size='small' src={props.image} />
            <Item.Content>
              <Item.Extra style={{marginBottom: '8px', marginTop: '0'}}>{props.date}</Item.Extra>
              <Item.Header>{props.title}</Item.Header>
              <Item.Description>{props.header}</Item.Description>
            </Item.Content>
        </Item>
    )
}

export default NewsItem;