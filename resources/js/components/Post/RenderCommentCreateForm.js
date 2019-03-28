import React from 'react';

const RenderCommentCreateForm = props => {
    return (
        <div>
            <form onSubmit={props.handleCommentSubmit}>
                <div>
                    <textarea onChange={props.handleChangeBody} value={props.body} />
                </div>
                <div>
                    <button>댓글작성</button>
                </div>
            </form>
        </div>
    );
};

export default RenderCommentCreateForm;
