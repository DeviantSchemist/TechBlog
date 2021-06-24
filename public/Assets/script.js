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

document.getElementById('postButton').addEventListener('click', event => {
  if (document.getElementById('createPost').classList.contains('disappear')) {
    document.getElementById('createPost').classList.remove('disappear')
    event.target.classList.add('disappear')
  }
})