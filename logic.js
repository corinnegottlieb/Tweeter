




const Tweeter = function () {
    const posts = JSON.parse(localStorage.posts || "[]")
    let postNum = 0
    let commNum = 0



    const getPosts = function () {
        return posts
    }

    const addPost = function (text) {
        postNum++
        posts.push({
            id: 'p' + postNum,
            text: text,
            comments: [],
        })
        localStorage.posts =JSON.stringify(posts)
        return addPost
    }

    const removePost = function (postID) {
        for (let p in posts) {
            if (posts[p].id === postID) {
                posts.splice(p, 1)
                localStorage.posts =JSON.stringify(posts)
                return
            }

        } return posts
    }

    const addComment = function (text, postID) {
        commNum++
        for (let p in posts) {
            if (posts[p].id === postID) {
                posts[p].comments.push({ text: text, id: "c" + commNum })
            } localStorage.posts =JSON.stringify(posts)
        }
        return addComment
    }
    const removeComment = function (postID, commentID) {
        for (let p in posts) {
            if (posts[p].id === postID) {
                for (let c in posts[p].comments) {
                    if (posts[p].comments[c].id === commentID) {
                        posts[p].comments.splice(c, 1)
                        localStorage.posts =JSON.stringify(posts)
                        return
                    }
                    
                }
            }
        }
        return removeComment
    }

    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}

