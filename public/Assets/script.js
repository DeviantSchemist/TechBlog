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