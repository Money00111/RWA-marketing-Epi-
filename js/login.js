function login(){

  let emailPhone = document.getElementById("emailPhone").value;
  let password = document.getElementById("password").value;

  if(emailPhone === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  // Demo login (later Firebase)
  console.log("Login:", emailPhone, password);

  alert("Login successful");

  // redirect to dashboard
  window.location.href = "../dashboard/dashboard.html";
    }
