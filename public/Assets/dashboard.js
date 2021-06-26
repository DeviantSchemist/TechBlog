/* if user has logged in, login button disappears and user will be able to see the post button
    on the dashboard page */
if (localStorage.hasOwnProperty('token')) {
  document.getElementById('loginNav').classList.add('disappear')
  document.getElementById('postButton').classList.remove('disappear')
}
else {
  document.getElementById('logoutNav').classList.add('disappear')
  document.getElementById('postButton').classList.add('disappear')
}

// if user logouts, removes their authorization token from local storage and go to index.html
document.getElementById('logoutNav').addEventListener('click', () => {
  localStorage.removeItem('token')
  window.location = '/index.html'
})

// if user clicks on post button, post button disppears and the create post fields appear
document.getElementById('postButton').addEventListener('click', event => {
  if (document.getElementById('createPost').classList.contains('disappear')) {
    document.getElementById('createPost').classList.remove('disappear')
    event.target.classList.add('disappear')
  }
})

// if user clicks on submit button, they can make a new post by filling in the fields
document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/posts', {
      post_title: document.getElementById('title').value,
      post_content: document.getElementById('content').value
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  )
  .then(() => window.location = '/index.html')
  .catch(err => console.error(err))
})