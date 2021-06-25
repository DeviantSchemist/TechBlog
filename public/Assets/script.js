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
        <div class="comment">
          <h3>Comment</h3>
          <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <button id="commentButton" type="button" class="btn btn-secondary btn-sm">Comment</button>
      </div>
    `)
  })
})
.catch(err => console.log(err))