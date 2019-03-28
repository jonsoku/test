import React from 'react';

const RenderComments = props => {
    return (
        <div>
            {props.postComments.map((postComment, index) => (
                <div key={index}>
                    <p>{postComment.user && postComment.user.name}</p>
                    <p>{postComment.body}</p>
                    <p>
                        {postComment.created_at === postComment.updated_at
                            ? postComment.created_at
                            : postComment.updated_at}
                    </p>
                    <div>
                        <button onClick={() => props.handleCommentDelete(postComment.id)}>삭제</button>
                        <button onClick={() => props.handleChageEditing(postComment.id)}>수정</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RenderComments;
