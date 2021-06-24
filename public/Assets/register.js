// registers new user
document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users/register', {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  })
    .then(() => window.location = '/login.html')
    .catch(err => console.error(err))
})