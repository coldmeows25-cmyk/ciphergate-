function checkCode() {
  const value = document.getElementById("answer").value.toLowerCase();

  if (value === "ciphers") {
    document.getElementById("message").innerText = "ACCESS CHECKING...";

    setTimeout(() => {
      document.getElementById("login").style.display = "none";
      document.getElementById("welcome").style.display = "block";
    }, 1200);

  } else {
    document.getElementById("message").innerText = "ACCESS DENIED";
  }
}
