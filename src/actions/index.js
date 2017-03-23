export const addPost = (post) => {
    console.log(post.title + " has been added to the posts!");
    return {
        type : "ADD_POST",
        payload : post
    }
};

export const login = (user) => {
    console.log("Succesfully logged in as: " + user.name);
    return {
        type : "USER_LOGIN",
        payload : user
    }
};

export const addComment = (comment, index) => {
    console.log("You've posted a comment!");
    return {
        type : "POST_COMMENT",
        payload : {
            comment : comment,
            index : index
        }
    }
};