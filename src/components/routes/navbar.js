import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Container } from 'semantic-ui-react';
import GoogleAuthContextProvider from '../../apis/googleAuthContext';
import GoogleAuth from '../../apis/googleAuth';
import { useState } from 'react'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('Fixtures/Results')
    
    const handleItemClick = (e) => {
        setActiveItem(e.target.innerHTML)
    }

    return (
        <Menu inverted stackable size='huge' style={{ backgroundColor: '#37003C', margin: 0, borderRadius: '0rem'}}>
            <Container>
                <Menu.Item header style={{ color: 'white' }}><Image size='tiny' src='/images/PL-Lion.png'/>PremInfo</Menu.Item>
                <Menu.Item
                    as='div'
                    style={{ color: 'white' }}
                    active={activeItem === 'Live Scores'}
                    onClick={handleItemClick}
                >
                <Link to='/livescores'>Live Scores</Link>
                </Menu.Item>
                <Menu.Item
                    as='div'
                    style={{ color: 'white' }}
                    active={activeItem === 'News'}
                    onClick={handleItemClick}
                >
                <Link to='/news'>News</Link>
                </Menu.Item>
                <Menu.Item
                    as='div'
                    style={{ color: 'white' }}
                    active={activeItem === 'Fixtures/Results'}
                    onClick={handleItemClick}
                >
                <Link to='/'>Fixtures/Results</Link>
                </Menu.Item>
                <Menu.Item
                    as='div'
                    style={{ color: 'white' }}
                    active={activeItem === 'Table'}
                    onClick={handleItemClick}
                >
                <Link to='/leaguetable'>Table</Link>
                </Menu.Item>
                <Menu.Item
                    position="right"
                    style={{ color: 'white' }}
                >
                <GoogleAuthContextProvider>
                  <GoogleAuth/>
                </GoogleAuthContextProvider>
                </Menu.Item>
            </Container>
        </Menu>
    )
}


export default Navbar;