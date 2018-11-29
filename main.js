const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

 const post = () => {
     tweeter.addPost($(`#input`).val())
     renderer.renderPosts(tweeter.getPosts())
 }

 $(`#posts`).on(`click`, `.delete`, function() {
     tweeter.removePost($(this).closest(`.post`).data().id)
     renderer.renderPosts(tweeter.getPosts())
 })

 $(`#posts`).on(`click`, `.commentButton`, function() {
    tweeter.addComment($(this).closest(`.post`).find(`.commentInput`).val(), $(this).closest(`.post`).data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$(`#posts`).on(`click`, `.delete-comment`, function() {
    tweeter.removeComment( $(this).closest(`.post`).data().id, $(this).closest(`div`).data().id)
    renderer.renderPosts(tweeter.getPosts())
})
