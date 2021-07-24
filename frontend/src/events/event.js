/**
 * @author Sagnik Chatterjee
 * list all the events and functionalities that the user can use
 */

export const logUserIn = (userId) => {
  return {
    type: "LOGIN_USER",
    payload: userId,
  };
};

//add CRUD functionality to the posts
//1. createposts
//2. updateposts
//3. read :i.e getPosts
//4. delete: deletePosts

export const getPosts = (posts) => {
  return {
    type: "GET_POSTS",
    payload: posts,
  };
};

export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

export const deletePost = (postId) => {
  return {
    type: "DELETE_POST",
    payload: postId,
  };
};

export const updatePost = (postId, newPostData) => {
  return {
    type: "UPDATE_POST",
    payload: {
      postId,
      newPostData,
    },
  };
};
export const setSinglePost = (post) => {
  return {
    type: "SET_SINGLE_POST",
    payload: post,
  };
};

//search for posts

export const searchPosts = (stringPost) => {
  return {
    type: "SEARCH_POST",
    payload: stringPost,
  };
};

//upvote and downvote single posts
export const upvoteSinglePost = (id) => {
  return {
    type: "UPVOTE_POST",
    payload: id,
  };
};

export const downvoteSinglePost = (id) => {
  return {
    type: "DOWNVOTE_POST",
    payload: id,
  };
};

// Comments
// 1. UpVote
// 2. DownVote
// 3. setComments
// 4. Delete Comments

export const upVoteComment = (commentId) => {
  return {
    type: "UPVOTE_COMMENT",
    payload: commentId,
  };
};

export const downVoteComment = (commentId) => {
  return {
    type: "DOWNVOTE_COMMENT",
    payload: commentId,
  };
};

export const deleteComment = (commentId) => {
  return {
    type: "DELETE_COMMENT",
    payload: commentId,
  };
};

export const setComments = (comments) => {
  return {
    type: "SET_COMMENTS",
    payload: comments,
  };
};
