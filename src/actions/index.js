export const addPost = (post) => {
    console.log(post.title + " has been added to the posts!");
    return {
        type : "ADD_POST",
        payload : post
    }
};