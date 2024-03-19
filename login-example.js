let isLoggedIn = false;

function login() {
  isLoggedIn = true;
}

function logout() {
  isLoggedIn = false;
  console.log("You are logged out.");
}

login();
logout();

if (isLoggedIn === true) {
  console.log("You are logged-in!");
} else {
  console.log("You are NOT logged-in!");
}
