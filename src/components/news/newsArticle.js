import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header, Segment, Image, Grid, GridColumn, Divider, Button, Comment, Form } from 'semantic-ui-react';
import { GoogleAuthContext } from '../../apis/googleAuthContext';

import NewsComment from './newsComment';

const NewsArticle = () => {
    const { signedIn, userGivenName, userId, reload } = useContext(GoogleAuthContext);
    const { id } = useParams();
    const [ article, setArticle] = useState(null);
    const [ articleComments, setArticleComments ] = useState(null);
    const [ newComment, setNewComment] = useState('');
    const [ message, setMessage ] =useState('');

    useEffect(() => {
        fetch('https://premjson.herokuapp.com/comments')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setArticleComments(data); 
        });

        fetch('https://premjson.herokuapp.com/news/' + id)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setArticle(data);
        })

        signedIn && setMessage('');
    }, [signedIn, newComment, reload, id]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (signedIn) {
        const doc = { 
            author: userGivenName, 
            authorId: userId, 
            articleId: id, 
            date: new Date(), 
            newComment }

        await fetch('https://premjson.herokuapp.com/comments', {
            method: 'POST',
            body: JSON.stringify(doc),
            headers: { 'Content-Type': 'application/json' }
        });
        setNewComment('');
        } else {
            setMessage('Please login to add a comment.')
        }
    }

    return (
        <Container className="App">
           <Container className='border'>
                { !article && <Segment style={{margin: '15px'}} textAlign='center'><div>Loading...</div></Segment>}
                {article &&
                    <Segment style={{margin: '15px'}}>
                        <Grid>
                        <GridColumn width={1}/>
                        <Grid.Column width={14} style={{padding: '30px 0'}}>
                            <Header as='h5'>{article.date}</Header>
                            <Divider/>
                            <Header as='h1' style={{color: '#37003C', textAlign: 'center'}}>{article.title}</Header>
                            <Header as='h3'>{article.header}</Header>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Image size='large' src={article.image} style={{display: 'block', marginTop: '15px'}}/>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{marginTop: '15px'}}>{article.body}</p>
                                </Grid.Column>
                            </Grid>
                            <Divider/>
                            <Header as='h3' style={{color: '#37003C'}}>Comments</Header>
                            <Comment.Group >
                                {articleComments && articleComments.filter(com => com.articleId === id).map(comment => {return <NewsComment comment={comment} key={comment.id}/>})}
                                <Form reply onSubmit={handleSubmit}>
                                <Form.TextArea required value={newComment} onChange={(e) => setNewComment(e.target.value)} style={{height: '70px'}}/>
                                <Button size='tiny' content='Add Comment' labelPosition='left' icon='edit' style={{backgroundColor: '#37003C', color: 'white'}} />
                                <div style={{color: '#cc3300', marginTop: '5px'}}>{message}</div>
                                </Form>
                            </Comment.Group>
                        </Grid.Column>
                        <GridColumn width={1}/>
                        </Grid>
                    </Segment>
                }
           </Container>
       </Container>
    )
}

export default NewsArticle;

// 'http://localhost:8000/comments/'
// 'http://localhost:8000/news/'