function showLogin(){
  document.getElementById("loginBox").classList.add("active");
  document.getElementById("registerBox").classList.remove("active");
}

function showRegister(){
  document.getElementById("registerBox").classList.add("active");
  document.getElementById("loginBox").classList.remove("active");
}

/* LOGIN */
function login(){
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  if(user === "" || pass === ""){
    alert("Fill all fields");
    return;
  }

  // redirect to dashboard
  window.location.href = "dashboard.html";
}

/* REGISTER */
function register(){
  let name = document.getElementById("name").value;

  if(name === ""){
    alert("Fill all fields");
    return;
  }

  alert("Account created!");
  showLogin();
    }
