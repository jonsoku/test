import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const Ul = styled.ul`
    display: grid;
`;
const Li = styled.li`
    text-align: center;
    padding: 1rem 2rem;
    transition: all 0.5s;
    /* border-bottom: 5px solid ${props => (props.current ? 'blue' : 'transparent')}; */
    /* transform: scale(${props => (props.current ? '1.3' : '1')}); */
    background-color : ${props => (props.current ? 'blue ' : 'transparent')};
    a{color: ${props => (props.current ? '#fff' : 'black')};
    }
`;

const HeaderLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
    <Container>
        <Ul>
            <Li current={pathname === '/'}>
                <HeaderLink to='/'>Home</HeaderLink>
            </Li>
            <Li current={pathname === '/posts'}>
                <HeaderLink to='/posts'>Post</HeaderLink>
            </Li>
        </Ul>
    </Container>
));
