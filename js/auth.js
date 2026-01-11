function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("All fields required");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("mrkalkifit_user", JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("mrkalkifit_user"));

  if (!user || email !== user.email || password !== user.password) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("loggedIn", true);
  window.location.href = "dashboard.html";
}
