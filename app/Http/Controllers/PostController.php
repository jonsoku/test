<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\PostRequest;
use App\PostComment;

class PostController extends Controller
{
    public function index()
    {
        $posts = \App\Post::with('user')->with('postComments')->latest()->get();
        return response()->json([
            'posts' => $posts
        ]);
    }

    public function myIndex()
    {
        $posts = Post::with('postComments')->where('user_id', auth()->id())->get();
        return response()->json([
            'myposts' => $posts
        ]);
    }

    public function create()
    {
        //
    }

    public function store(PostRequest $request)
    {
        $user = $request->user();
        $user->posts()->create($request->all());
    }

    public function show(Post $post)
    {
        $post->user;
        $postComments = $post->postComments()->with('user')->latest()->get();
        return response()->json([
            'post' => $post,
            'postComments' => $postComments
        ]);
    }

    public function edit(Post $post)
    {
        //
    }

    public function update(PostRequest $request, Post $post)
    {
        $post->update($request->all());
    }

    public function destroy(Post $post)
    {
        $post->delete();
        // user()->isAdmin()->
    }
}
