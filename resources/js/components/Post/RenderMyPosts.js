import React from 'react';

const RenderMyPosts = props => {
    return (
        <div>
            <div>
                {props.myPosts.map((myPost, index) => (
                    <div key={index}>
                        <div>{myPost.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RenderMyPosts;
