<?php

namespace App\Http\Controllers;

use App\PostComment;
use Illuminate\Http\Request;
use App\Http\Requests\PostCommentRequest;
use App\Post;

class PostCommentController extends Controller
{
    public function store(PostCommentRequest $request, Post $post)
    {
        $user = $request->user();
        $user->postComments()->create(array_merge(
            $request->all(),
            ['post_id' => $post->id]
        ));
    }

    public function show(PostComment $postComment)
    {
        //
    }

    public function edit(PostComment $postComment)
    {
        //
    }

    public function update(PostCommentRequest $request, Post $post,  PostComment $postComment)
    {
        $postComment->update($request->all());
    }

    public function destroy(Post $post, PostComment $postComment)
    {
        $postComment->delete();
    }
}
