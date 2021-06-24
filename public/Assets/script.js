if (localStorage.hasOwnProperty('token')) {
  document.getElementById('loginNav').classList.add('disappear')
}
else {
  document.getElementById('logoutNav').classList.add('disappear')
}