const Renderer = () => {
    const renderComments = comments => {
        let allCommentsHTML = ""
            for (let comment of comments) {
                let $comment = `<div data-id = ${comment.id}> <span class="delete-comment">x </span>${comment.text}</div>`
                allCommentsHTML += $comment
            } return allCommentsHTML
        } 
    


    const renderPosts = posts => {
        $("#posts").empty();
        for (let post of posts) {
            let $post = `<div class="post-text post" data-id=${post.id} > 
            <p>${post.text}</p>
            <div class="comments">
                 ${renderComments(post.comments)}
            </div>
            <input class = "commentInput" type="text" placeholder="Got something to say?">
            <button class = "commentButton" >Comment</button>
            </br>
            </br>
            <div class="delete">Delete Post</div>
            
            </div>`
            $("#posts").append($post)
            
        }

    }


    return {
        renderPosts: renderPosts,
        renderComments: renderComments

    }

}


