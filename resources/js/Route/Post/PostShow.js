import React, { Component } from 'react';
import Axios from 'axios';
import RenderPost from '../../components/Post/RenderPost';
import RenderComments from '../../components/Post/RenderComments';
import Container from '../../components/Style/Container';
import RenderCommentCreateForm from '../../components/Post/RenderCommentCreateForm';
import RenderCommentEditForm from '../../components/Post/RenderCommentEditForm';

export default class PostShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            postComments: [],
            body: '',
            editing: false,
            commentId: ''
        };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleCommentSubmit2 = this.handleCommentSubmit2.bind(this);
    }

    // editing : true
    handleChangeBody2 = e => {
        this.setState({
            body: e.target.value
        });
    };

    async handleCommentSubmit2(e) {
        e.preventDefault();
        return await Axios.put(`${this.props.match.url}/postComments/${this.state.commentId}`, {
            body: this.state.body
        })
            .catch(error => console.log(error))
            // .then(alert('댓글을 추가하였습니다.'))
            .then(
                this.setState({
                    editing: false,
                    body: ''
                })
            )
            .then(this._getPost());
    }

    // editing : false

    handleChageEditing = id => {
        this.setState({
            editing: true,
            commentId: id
        });
    };

    handleCommentDelete = id => {
        Axios.delete(`${this.props.match.url}/postComments/${id}`)
            .catch(error => console.log(error))
            .then(this._getPost());
    };

    handleChangeBody = e => {
        this.setState({
            body: e.target.value
        });
    };

    async handleCommentSubmit(e) {
        e.preventDefault();
        return await Axios.post(`${this.props.match.url}/postComments`, {
            body: this.state.body
        })
            .catch(error => console.log(error))
            // .then(alert('댓글을 추가하였습니다.'))
            .then(
                this.setState({
                    body: ''
                })
            )
            .then(this._getPost());
    }

    //게시물관련

    handleEdit = () => {
        this.props.history.push(`${this.props.match.url}/edit`);
    };

    handleDelete = () => {
        return Axios.delete(`${this.props.match.url}`).then(this.props.history.goBack());
    };

    handleBack = () => {
        this.props.history.goBack();
    };

    async _getPost() {
        return await Axios.get(`${this.props.match.url}`)
            .catch(error => console.log(error))
            .then(response =>
                this.setState({
                    post: response.data.post,
                    postComments: [...response.data.postComments]
                })
            );
    }

    componentDidMount() {
        this._getPost();
    }

    render() {
        return (
            <Container>
                <RenderPost
                    post={this.state.post}
                    handleBack={this.handleBack}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                />
                {this.state.editing ? (
                    <RenderCommentEditForm
                        handleCommentSubmit2={this.handleCommentSubmit2}
                        handleChangeBody2={this.handleChangeBody2}
                        body={this.state.body}
                    />
                ) : (
                    <>
                        <RenderCommentCreateForm
                            handleCommentSubmit={this.handleCommentSubmit}
                            handleChangeBody={this.handleChangeBody}
                            body={this.state.body}
                        />
                        <RenderComments
                            postComments={this.state.postComments}
                            handleCommentDelete={this.handleCommentDelete}
                            handleChageEditing={this.handleChageEditing}
                        />
                    </>
                )}
            </Container>
        );
    }
}
