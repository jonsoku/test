import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 330px;
    grid-gap: 100px;
`;
const Box = styled.div`
    box-shadow: var(--box-shadow);
    position: relative;
    padding: 2rem;
`;

const Title = styled.div``;

const Date = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.8rem;
`;

// Create the keyframes
const scale = keyframes`
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1.5);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds

const Scale = styled.div`
    display: inline-block;
    animation: ${scale} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

const RenderPosts = props => {
    return (
        <>
            <button onClick={() => props.handleLinkCreate()}>생성버튼</button>
            <Grid>
                {props.posts.map((post, index) => (
                    <Box key={index} onClick={() => props.handleLinkShow(post.id)}>
                        <Title>{post.title}</Title>
                        <div>{post.user.name}</div>
                        <div>{post.description}</div>
                        {post.create_at === post.updated_at ? (
                            <Date>
                                <span>{post.created_at}</span>
                            </Date>
                        ) : (
                            <Date>
                                <span>{post.updated_at}</span>
                            </Date>
                        )}
                        <Scale>점점확대</Scale>
                        <div>{post.post_comments.length > 0 ? '댓글 수 :' + post.post_comments.length : ''}</div>
                    </Box>
                ))}
            </Grid>
        </>
    );
};

export default RenderPosts;
