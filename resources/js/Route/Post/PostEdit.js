import React, { Component } from 'react';
import RenderEditForm from '../../components/Post/RenderEditForm';
import Axios from 'axios';

export default class PostEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create: {
                title: '',
                description: ''
            },
            post: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        return await Axios.put(`/posts/${this.props.match.params.id}`, {
            title: this.state.create.title,
            description: this.state.create.description
        })
            .catch(error => console.log(error))
            .then(
                this.setState({
                    create: {
                        ...this.state.create,
                        title: '',
                        description: ''
                    }
                })
            )
            .then(this.props.history.push(`/posts/${this.props.match.params.id}`));
    }

    handleChangeTitle = e => {
        this.setState({
            create: {
                ...this.state.create,
                title: e.target.value
            }
        });
    };

    handleChangeDescription = e => {
        this.setState({
            create: {
                ...this.state.create,
                description: e.target.value
            }
        });
    };

    async _getPost() {
        return await Axios.get(`/posts/${this.props.match.params.id}`)
            .catch(error => console.log(error))
            .then(response =>
                this.setState({
                    create: {
                        ...this.state.create,
                        title: response.data.post.title,
                        description: response.data.post.description
                    }
                })
            );
    }

    componentDidMount() {
        this._getPost();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <RenderEditForm
                    handleChangeTitle={this.handleChangeTitle}
                    handleChangeDescription={this.handleChangeDescription}
                    handleSubmit={this.handleSubmit}
                    create={this.state.create}
                />
            </div>
        );
    }
}
