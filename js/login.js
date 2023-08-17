document.getElementById('btn-submit').addEventListener('click',function(){

  const emailField =document.getElementById('user-email');
  const email =emailField.value;
  console.log(email)

const passwordField =document.getElementById('user-password')
const password = passwordField.value;

if(email ==='mahi@gmail.com' && password ==='mahi'){
  window.location.href='bank.html'
}
else{
  alert('invalid user')
}
})