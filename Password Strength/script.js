var pass = document.getElementById("password");
var mssg = document.getElementById("message");
var str = document.getElementById("strength");

let eyeicon = document.getElementById('eyeicon')
let password = document.getElementById('password')

eyeicon.onclick = function(){
    if(password.type === 'password'){
        password.type = 'text';
        eyeicon.src = 'eye-open.png';
    }else{
        password.type = 'password'
        eyeicon.src = 'eye-close.png';
    }
}

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    mssg.style.display = "block";
  } else {
    mssg.style.display = "none";
  }
  if (pass.value.length < 4) {
    str.innerHTML = "Weak";
    str.style.color = "red";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "Medium";
    str.style.color = "orange";
  } else {
    str.innerHTML = "Strong";
    str.style.color = "green";
  }
});
