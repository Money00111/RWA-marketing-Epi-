function register(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if(name === "" || email === "" || phone === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  let user = {
    name,
    email,
    phone,
    role
  };

  console.log("User created:", user);

  alert("Account created successfully");

  // redirect to login
  window.location.href = "../login/login.html";
}
