import React, { Component } from 'react';
import RenderCreateForm from '../../components/Post/RenderCreateForm';
import Axios from 'axios';

export default class PostCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create: {
                title: '',
                description: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        return await Axios.post(`/posts`, {
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
            .then(this.props.history.push(`/posts`));
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

    render() {
        console.log(this.props);
        return (
            <div>
                <RenderCreateForm
                    handleChangeTitle={this.handleChangeTitle}
                    handleChangeDescription={this.handleChangeDescription}
                    handleSubmit={this.handleSubmit}
                    create={this.state.create}
                />
            </div>
        );
    }
}
