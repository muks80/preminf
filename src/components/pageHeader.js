import React from 'react';
import { Segment, Grid, Header, Image, Button, Icon } from 'semantic-ui-react';

const PageHeader = (props) => {

    const button = (num, icon) => {
        return (
            <Button icon labelPosition='left' 
                    style={{marginTop: '60px', 
                            backgroundColor: '#37003C',
                            color: 'white'
                        }} 
                    onClick={() => props.updateRound((parseInt(props.round) + num).toString())}
            >
                Game Week {parseInt(props.round) + num}
                <Icon name={icon} />
            </Button>
        ) 
    }

    return (
        <Segment style={{margin: '15px'}} textAlign='center'>
            <Grid>
                <Grid.Column width={4}>
                    {props.round > 1 && button(-1, 'left arrow')}
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header style={{color: '#37003C'}}>
                        {props.title}
                    </Header>
                    <Image style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src='./images/premier-league-3-logo.png'></Image>
                </Grid.Column>
                <Grid.Column width={4}>
                    {props.round < 38 && button(1, 'right arrow')}
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default PageHeader;