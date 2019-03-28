import React from 'react';

const RenderCommentEditForm = props => {
    return (
        <div>
            {console.log(props)}
            <form onSubmit={props.handleCommentSubmit2}>
                <div>
                    <textarea onChange={props.handleChangeBody2} value={props.body} />
                </div>
                <div>
                    <button>댓글수정</button>
                </div>
            </form>
        </div>
    );
};

export default RenderCommentEditForm;
