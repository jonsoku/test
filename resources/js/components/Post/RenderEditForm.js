import React from 'react';

const RenderEditPost = props => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <input onChange={props.handleChangeTitle} value={props.create.title} placeholder='title' />
                </div>
                <div>
                    <textarea
                        onChange={props.handleChangeDescription}
                        value={props.create.description}
                        placeholder='description'
                    />
                </div>
                <div>
                    <button type='submit'>포스트수정</button>
                </div>
            </form>
        </div>
    );
};

export default RenderEditPost;
