import React, { Component } from 'react';
import Axios from 'axios';
import RenderPosts from '../../components/Post/RenderPosts';
import SelectButton from '../../components/Post/SelectButton';
import RenderMyPosts from '../../components/Post/RenderMyPosts';
import Container from '../../components/Style/Container';
import Loader from '../../components/Loader';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            myPosts: [],
            select: false,
            loading: true
        };
    }

    handleLinkCreate = () => {
        this.props.history.push(`${this.props.match.url}/create`);
    };

    handleLinkShow = id => {
        this.props.history.push(`${this.props.match.url}/${id}`);
    };

    handleSelectButton = () => {
        if (this.state.select === true) {
            this.setState({
                select: false
            });
        } else {
            this.setState({
                select: true
            });
        }
    };

    async _getPosts() {
        return await Axios.get(`/posts`).then(response =>
            this.setState({
                posts: [...response.data.posts],
                loading: false
            })
        );
    }
    async _getMyPosts() {
        return await Axios.get(`/myPosts`).then(response =>
            this.setState({
                myPosts: [...response.data.myposts]
            })
        );
    }

    componentDidMount() {
        this._getPosts();
        this._getMyPosts();
    }

    render() {
        console.log(this.state);
        return (
            <>
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <Container>
                        <SelectButton handleSelectButton={this.handleSelectButton} select={this.state.select} />
                        {this.state.select ? (
                            <RenderMyPosts myPosts={this.state.myPosts} />
                        ) : (
                            <RenderPosts
                                posts={this.state.posts}
                                handleLinkShow={this.handleLinkShow}
                                handleLinkCreate={this.handleLinkCreate}
                            />
                        )}
                    </Container>
                )}
            </>
        );
    }
}
