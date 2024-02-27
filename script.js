function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform some basic validation
  if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
  }

  // For demonstration purposes, let's just assume successful login with any credentials
  showWelcome(username);
}

function showWelcome(username) {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("welcome-form").style.display = "block";
  document.getElementById("welcome-message").innerText = "Welcome, " + username + "!";
}

function logout() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("welcome-form").style.display = "none";
}