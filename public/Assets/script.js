if (localStorage.hasOwnProperty('token')) {
  document.getElementById('loginNav').classList.add('disappear')
}
else {
  document.getElementById('logoutNav').classList.add('disappear')
}

document.getElementById('logoutNav').addEventListener('click', () => {
  localStorage.removeItem('token')
  window.location = '/index.html'
})

// displays all existing posts from all users
axios.get('/api/posts')
.then(({data: response}) => {
  console.log(response)
  response.forEach(post => {
    document.getElementById('posts').insertAdjacentHTML('afterbegin', 
    `
      <div class="post-item">
        <h1>${post.post_title}</h1>
        <p>${post.post_content}</p>
        <p>--${post.User.username}</p>
        <div id="commentArea" class="commentArea">
          <h3 id="commentHeader" class="disappear">Add a New Comment</h3>
          <textarea class="disappear" name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <button id="commentButton" type="button" class="btn btn-secondary btn-sm">Comment</button>
        <button id="postCommentButton" type="button" class="btn btn-secondary btn-sm disappear">Post Comment</button>
      </div>
    `)
  })
})
.catch(err => console.log(err))

// document.getElementById('commentButton').addEventListener('click', event => {
//   document.getElementById('commentHeader').classList.remove('disappear')
//   document.getElementById('comment').classList.remove('disappear')
//   document.getElementById('postCommentButton').classList.remove('disappear')
//   event.target.classList.add('disappear')
// })

// document.getElementById('postCommentButton').addEventListener('click', event => {
//   axios.post('/api/comments', {
//     comment_content: document.getElementById('comment').value
//   },
//   {
//     headers: {
//       'Authorization': `Bearer ${localStorage.getItem('token')}`
//     }
//   })
//   .then(() => {
//     document.getElementById('commentHeader').classList.add('disappear')
//     document.getElementById('comment').classList.add('disappear')
//     event.target.classList.add('disappear')
//     document.getElementById('commentButton').remove('disappear')
//   })
//   .catch(err => console.error(err))
// })