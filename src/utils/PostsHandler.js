export default class PostsHandler {
    static SetupPosts() {
        localStorage.setItem('posts', JSON.stringify([]));
    }
    
    static GetPosts() {
        return JSON.parse(localStorage.getItem('posts'));
    }

    static SetPosts(posts) {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    static AddPost(post) {
        let posts = this.GetPosts();
        post.key = posts.length;
        posts.push(post)
        this.SetPosts(posts);
    }

    static AddCommentToPost(key, comment) {
        let posts = this.GetPosts();
        posts.find(this.FindPost).comments.push(comment);
        this.SetPosts(posts);
    }

    static AddLikeToPost(key) {
        let posts = this.GetPosts();
        posts.find(this.FindPost).likes++;
        this.SetPosts(posts);
    }

    static FindPost(element, index, array, key) {
        return element.key === key;
    }
}