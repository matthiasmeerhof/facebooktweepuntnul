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

export const addLike = (index) => {
    console.log("You've liked a comment!");
    return {
        type : "POST_LIKE",
        payload : index
    }
};

export const logout = () => {
    console.log("Succesfully logged out");
    return {
        type : "USER_LOGOUT"
    }
};

export const search = (keyword) => {
    console.log("You've initiated a search!");
    return {
        type: "SEARCH",
        payload: keyword
    }
}