const Tweeter = function () {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postNum = 2
    let commNum = 6



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
        return addPost
    }

    const removePost = function (postID) {
        for (let p in posts) {
            if (posts[p].id === postID) {
                posts.splice(p, 1)
                return
            }

        } return posts
    }

    const addComment = function (text, postID) {
        commNum++
        for (let p in posts) {
            if (posts[p].id === postID) {
                posts[p].comments.push({ text: text, id: "c" + commNum })
            }
        }
        return addComment
    }
    const removeComment = function (postID, commentID) {
        for (let p in posts) {
            if (posts[p].id === postID) {
                for (let c in posts[p].comments) {
                    if (posts[p].comments[c].id === commentID) {
                        posts[p].comments.splice(c, 1)
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

// const tweeter = Tweeter()


// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}

