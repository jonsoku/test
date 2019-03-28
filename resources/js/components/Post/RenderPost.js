import React from 'react';

const RenderPost = props => {
    return (
        <div>
            <div>{props.post.id}</div>
            <div>{props.post.user && props.post.user.name}</div>
            <div>{props.post.title}</div>
            <div>{props.post.description}</div>
            <div>
                {props.post.created_at === props.post.updated_at
                    ? '작성일 : ' + props.post.created_at
                    : '작성일 : ' + props.post.created_at + '수정일 : ' + props.post.updated_at}
            </div>
            <button onClick={() => props.handleBack()}>뒤로가기</button>
            <button onClick={() => props.handleDelete()}>삭제하기</button>
            <button onClick={() => props.handleEdit()}>수정하기</button>
        </div>
    );
};

export default RenderPost;
