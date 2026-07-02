function login(){
  let emailOrPhone = document.getElementById("emailOrPhone").value;
  let password = document.getElementById("password").value;

  if(emailOrPhone === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  // For now (prototype)
  console.log("Login attempt:", emailOrPhone, password);

  alert("Login successful (demo mode)");

  // Redirect to dashboard
  window.location.href = "dashboard.html";
}
