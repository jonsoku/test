import React from 'react';

const RenderCreateForm = props => {
    return (
        <div>
            {console.log(props.create)}
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
                    <button type='submit'>포스트작성</button>
                </div>
            </form>
        </div>
    );
};

export default RenderCreateForm;
